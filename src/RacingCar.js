import { userInput } from "./utils/MissionUtils.js";
import {
	validateDuplicateName,
	validateMinCar,
	validateMaxCar,
	validateNameLength,
	validateMinCount,
	validateMaxCount,
	validateString,
} from "./utils/validate.js";

class RacingCar {
	async runRacingCar() {
		try {
			const { carNameValue, tryCountValue } = await this.getUserInput();

			await validateNameLength(carNameValue);
			await validateMaxCar(carNameValue);
			await validateMinCar(carNameValue);
			await validateDuplicateName(carNameValue);

			await validateMaxCount(tryCountValue);
			await validateString(tryCountValue);
			await validateMinCount(tryCountValue);

			this.carNamesAndNumberMap = await this.setCarNumberMap();
		} catch (error) {
			throw new Error(`${error.message}`);
		}
	}

	async getUserInput() {
		const carNameValue = await userInput(
			"경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
		);
		const tryCountValue = await userInput("시도할 횟수는 몇 회인가요?\n");
		return { carNameValue, tryCountValue };
	}

	async setCarNumberMap() {
		const carNamesAndNumberMap = this.carNames.map((carName) => ({
			carName,
			carNumbers: Array.from({ length: this.tryCount }, () =>
				getRandomInRangeNumber(0, 9)
			),
		}));

		return carNamesAndNumberMap;
	}
}

export default RacingCar;
