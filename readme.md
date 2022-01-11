# PSWD Generator

Cryptographically-secure password generator written in Typescript with zero dependency.

## Installation

```sh
npm i pswd-generator
```

## Usage

```ts
import generatePassword, { charsets } from 'pswd-generator';

const password = generatePassword(24, charsets.NUMBERS + charsets.LOWERCASE + charsets.UPPERCASE + charsets.SYMBOLS);

console.log(password);

// A:_X`h%&:eto5d8i?bFZmOAU
```
