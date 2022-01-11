import crypto from 'crypto';

export const charsets = {
	NUMBERS: '0123456789',
	LOWERCASE: 'abcdefghijklmnopqrstuvwxyz',
	UPPERCASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	SYMBOLS: '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~',
};

export default function generatePassword(
	length: number,
	charset: string,
): string {
	const charsetLength = charset.length;

	let password = '';

	while (length--) {
		password += charset[crypto.randomInt(charsetLength)];
	}

	return password;
}
