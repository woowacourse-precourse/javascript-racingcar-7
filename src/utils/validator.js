import { ERROR_MESSAGES, VALID_CHARACTER_REGEX } from '../constatns/validation';

const hasWhiteSpace = (str) => {
	return str.includes(' ');
};

const hasNothing = (str) => {
	return str.length === 0;
};

const isValidLength = (carName) => {
	return carName.length >= 1 && carName.length <= 5;
};

const isValidName = (carName) => {
	return VALID_CHARACTER_REGEX.test(carName);
};

const isDuplicated = (carNames) => {
	return carNames.some(
		(name) => carNames.indexOf(name) !== carNames.lastIndexOf(name)
	);
};

const isInteger = (round) => {
	const number = Number(round);
	return Number.isInteger(number);
};

const isNumber = (round) => {
	return !isNaN(Number(round));
};

const isNegative = (round) => {
	return Number(round) <= 0;
};

export const InputValidator = {
	validateNameInput: (carNames) => {
		carNames.forEach((carName) => {
			if (hasWhiteSpace(carName)) {
				throw new Error(ERROR_MESSAGES.hasWhiteSpace);
			}
			if (hasNothing(carName)) {
				throw new Error(ERROR_MESSAGES.hasNothing);
			}
			if (!isValidLength(carName)) {
				throw new Error(ERROR_MESSAGES.invalidNameLength);
			}
			if (!isValidName(carName)) {
				throw new Error(ERROR_MESSAGES.invalidName);
			}
		});
		if (isDuplicated(carNames)) {
			throw new Error(ERROR_MESSAGES.isDuplicates);
		}
		return true;
	},

	validateRoundInput: (round) => {
		if (!isInteger(round)) {
			throw new Error(ERROR_MESSAGES.isRational);
		}
		if (!isNumber(round)) {
			throw new Error(ERROR_MESSAGES.isNaN);
		}
		if (isNegative(round)) {
			throw new Error(ERROR_MESSAGES.isNegative);
		}
		if (hasWhiteSpace(round)) {
			throw new Error(ERROR_MESSAGES.hasWhiteSpace);
		}
		if (hasNothing(round)) {
			throw new Error(ERROR_MESSAGES.hasNothing);
		}
		return true;
	},
};
