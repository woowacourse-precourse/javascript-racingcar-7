import {
	validateDuplicateName,
	validateMaxCar,
	validateMaxCount,
	validateMinCar,
	validateMinCount,
	validateNameLength,
	validateString,
} from "./utils/validate.js";

class Validation {
	async validateCarNames(carNames) {
		const carNameValue = carNames.join(",");
		await validateNameLength(carNameValue);
		await validateMaxCar(carNameValue);
		await validateMinCar(carNameValue);
		await validateDuplicateName(carNameValue);
	}

	async validateTryCount(tryCount) {
		await validateMaxCount(tryCount);
		await validateString(tryCount);
		await validateMinCount(tryCount);
	}
}

export default Validation;
