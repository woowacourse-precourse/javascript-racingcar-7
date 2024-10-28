import { ERROR_MESSAGES, VALID_CHARACTER_REGEX } from '../constatns/validation';

export const InputValidator = {
	validateNameInput: (carNames) => {
		carNames.forEach((carName, _) => {
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
	hasWhiteSpace: (str) => {
		return str.includes(' ');
	},
	hasNothing: (str) => {
		return str.length == 0;
	},
	isValidLength: (carName) => {
		return carName.length >= 1 || carName.length <= 5;
	},
	isValidName: (carName) => {
		return carName.test(VALID_CHARACTER_REGEX);
	},
	isDuplicated: (carNames) => {
		const carNamesArray = carNames.split(',');
		const isDup = carNamesArray.some(
			(name) => carNamesArray.indexOf(name) !== carNamesArray.lastIndexOf(name)
		);
		return isDup;
	},
	isInteger: (round) => {
		const number = Number(round);
		return Number.isInteger(number);
	},
	isNumber: (round) => {
		return !isNaN(Number(round));
	},
	isNegative: (round) => {
		return Number(round) <= 0;
	},
};
