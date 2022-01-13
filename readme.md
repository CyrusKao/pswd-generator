# PSWD Generator

Cryptographically-secure password generator written in Typescript with zero dependencies.

> See how it's implemented at [my blog post](https://nocache.org/p/build-a-cryptographically-secure-password-generator-in-node-js-with-typescript).

## Installation

```sh
npm i pswd-generator
```

## Usage

### Use Presets

```ts
import generatePassword, { charsets } from 'pswd-generator';

const password = generatePassword(
  24,
  charsets.NUMBERS + charsets.LOWERCASE + charsets.UPPERCASE + charsets.SYMBOLS,
);

console.log(password);

// A:_X`h%&:eto5d8i?bFZmOAU
```

### Custom Charset

```ts
generatePassword(24, 'ABCDEFG');
```
