---
title: Password backup protocol
date: 2025-02-01
description: Protocol for backing up my passwords
---

# Password backup protocol

**The goal:** back up my password store and `pass` private key in an encrypted form that can later be used with my password recovery protocol.
[Password management homepage](/notes/passwords/passwords).

## Hardware

Assemble: 

- USB to hold passwords and SSH keys
- USB to hold my pass private key
- Optional: or physical paper to hold the passphrase for my pass private key

## Back up `pass` master key

```bash
# Identify the ID of the GPG private key used to decrypt your password store. #
# Identify based on comment, e.g. "For use with pass".
# For ID `82EAE28EEFC1D4BE5FB69B9369F7FCEB9CADDE97`, you can use the last 8
# characters (`9CADDE97`) as an abbreviated ID.
$ gpg -K
sec   rsa4096 1970-01-01 [SC]
      82EAE28EEFC1D4BE5FB69B9369F7FCEB9CADDE97  # this is the ID!
uid           [ultimate] Elijan Mastnak (For use with pass) <elijan@ejmastnak.com>

# Export secret key (produces a binary file).
# The exported file will also contain associated public key information.
$ gpg --export-secret-key 9CADDE97 > private.key
```

Copy `private.key` to USB drive meant to hold my private key.

## Back up passwords

Copy `~/.password-store` to the USB drive meant to hold my passwords.

## Back up SSH keys

```bash
# Create an archive of your SSH directory
tar -czf ssh.tar.gz --directory="${HOME}" .ssh

# Encrypt SSH directory with public key encryption.
# Pass ID of your pass master key (or whatever key pair you want to use for encryption/decryption).
# Produces ssh.tar.gz.gpg
gpg --encrypt --recipient 9CADDE97 ssh.tar.gz

# To "safely" remove unencrypted SSH archive
shred -u ssh.tar.gz
```

Copy `ssh.tar.gz.gpg` to the USB drive meant to hold my passwords.

## Script automating the above

Here is a Bash script automating the above process:

```bash
#!/usr/bin/env bash

# NAME
#     backup-passwords - Backs up passwords to destination directory
# 
# SYNOPSIS
#     backup-passwords destination
#
# DESCRIPTION
#     Backs up passwords to the given destination directory; in practice to a
#     USB drive, so `destination` might look like `/run/media/ej/Sandisk/`.
#     The script will create a nested backup folder *inside* the given
#     destiation directory, e.g. `/run/media/ej/Sandisk/pass` in above example.

if [ "$#" -ne 1 ]; then
  echo "Error: no destination directory provided. Aborting."
  echo "Usage: ${0} destination" >&2
  exit 1
fi

DESTINATION="${1}"

if [[ ! -d "${DESTINATION}" ]]; then
  echo "Error: destination directory is not writable. Aborting."
  exit 1
fi

GPG_ID="82EAE28EEFC1D4BE5FB69B9369F7FCEB9CADDE97"
PASSWORD_STORE="${HOME}/.password-store"
SSH_BASENAME=".ssh"
SSH_TMP_GZ="${HOME}/tmp/ssh.tar.gz"
DESTINATION="${DESTINATION}/pass"

set -e

mkdir -p "${DESTINATION}"
date > "${DESTINATION}/backup-date.txt"

echo "Exporting private key..."
gpg --export-secret-key ${GPG_ID} > "${DESTINATION}/private.key"

echo "Copying password store..."
cp -r "${PASSWORD_STORE}" "${DESTINATION}/password-store"

echo "Copying SSH directory..."
tar -czf "${SSH_TMP_GZ}" --directory="${HOME}" "${SSH_BASENAME}"
gpg --encrypt --recipient ${GPG_ID} "${SSH_TMP_GZ}"
mv -f "${SSH_TMP_GZ}.gpg" "${DESTINATION}"
shred -u "${SSH_TMP_GZ}"
```
