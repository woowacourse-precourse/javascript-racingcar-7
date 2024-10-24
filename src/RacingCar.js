import { userInput } from "./utils/MissionUtils.js";
import {
	validateDuplicateName,
	validateMinCar,
	validateMaxCar,
	validateNameLength,
	validateMinCount,
	validateMaxCount,
} from "./utils/validate.js";

class RacingCar {
	async runRacingCar() {
		try {
			const { carNameValue, tryCountValue } = await this.getUserInput();
			this.validateCarName(carNameValue);
			this.validateTryCount(tryCountValue);
		} catch (error) {
			console.error(error);
			throw new Error(error.message);
		}
	}

	async getUserInput() {
		const carNameValue = await userInput(
			"경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
		);
		const tryCountValue = await userInput("시도할 횟수는 몇 회인가요?\n");
		return { carNameValue, tryCountValue };
	}

	async validateCarName(carNameValue) {
		await validateNameLength(carNameValue);
		await validateMaxCar(carNameValue);
		await validateMinCar(carNameValue);
		await validateDuplicateName(carNameValue);
	}

	async validateTryCount(tryCountValue) {
		await validateMinCount(tryCountValue);
		await validateMaxCount(tryCountValue);
	}
}

export default RacingCar;
