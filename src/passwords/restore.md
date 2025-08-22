---
title: Password recovery protocol
date: 2025-02-01
description: Protocol for recovering passwords from backup
---

# Password recovery protocol

**The goal:** Given a blank Linux computer with Internet access, a USB drive with my password store, and a USB drive holding the private key encrypting my `pass` password store:

- Gain access to my password store
- Gain access to my SSH keys and access to all SSH hosts
- Gain access to my Slovene digitalno potrdilo and install it on a web browser on the new computer
 
[Password management homepage](/notes/passwords/passwords).

## You need the following

- A computer with [GPG](https://gnupg.org/) and [pass](https://www.passwordstore.org/) installed
- The `password-store` folder holding my encrypted passwords.
- The `private.key` file holding the GPG private key used to decrypt my passwords (i.e. the `pass` master key).
- The private key's passphrase.

## Import backed-up `pass` master key

Copy `private.key` to a convenient location on new computer.

```bash
# Import the key; enter passphrase when prompted
$ gpg --import private.key

# Identify the key's ID.
# Identify key based on comment, e.g. "For use with pass".
# For ID `82EAE28EEFC1D4BE5FB69B9369F7FCEB9CADDE97`, you can use the last 8
# characters (`9CADDE97`) as an abbreviated ID.
$ gpg -K
sec   rsa4096 1970-01-01 [SC]
      82EAE28EEFC1D4BE5FB69B9369F7FCEB9CADDE97  # this is the ID!
uid           [ultimate] Elijan Mastnak (For use with pass) <elijan@ejmastnak.com>

# Trust the new keypair
$ gpg --edit-key <KEY-ID>
> trust # select ultimate trust
> quit
```

## Recover passwords

- Copy `password-store` (e.g. from backup) to `~/.password-store` on new computer.
- Ensure `~/.password-store` contains a one-line `.gpg-id` file with the ID (e.g. `82EAE28EEFC1D4BE5FB69B9369F7FCEB9CADDE97`) of the pass master key.

Then use `pass` to access passwords as normal.

### Aside: decrypt passwords with plain GPG

To decrypt e.g. `Foo.gpg`:

```bash
# Decrypt Foo.gpg and output the decrypted contents in the file Foo.txt
gpg --decrypt --recipient 9CADDE97 --output Foo.txt Foo.gpg
```

## Recover digitalno potrdilo

Summarizing from `identity/SIGEN-CA-README.md`:

```bash
# Decrypt manual GPG decryption to get a P12 file
gpg --decrypt SIGEN-CA-p12.gpg > SIGEN-CA.p12
```

Import the P12 file into a browser of your choice.

For import and PEM passphrases see `identity/SIGEN-CA-README.md`

## Recover SSH keys

```bash
# Decrypt SSH directory
gpg --decrypt --recipient 9CADDE97 --output ssh.tar.gz ssh.tar.gz.gpg

# Extract SSH directory to current directory.
# (Should create a `.ssh` directory in the current directory.)
tar -xf ssh.tar.gz ./
```

Move the extracted `.ssh` directory to `~/.ssh`.

You'll need the passwords to the SSH keys to use them; the passwords are in the password store.
