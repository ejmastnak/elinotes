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
tar -czf ssh.tar.gz .ssh

# Encrypt SSH directory with public key encryption.
# Pass ID of your pass master key (or whatever key pair you want to use for encryption/decryption).
# Produces ssh.tar.gz.gpg
gpg --encrypt --recipient 9CADDE97 ssh.tar.gz
```

Copy `ssh.tar.gz.gpg` to the USB drive meant to hold my passwords.
