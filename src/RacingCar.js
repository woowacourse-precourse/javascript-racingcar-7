import {
	getRandomInRangeNumber,
	printOutput,
	userInput,
} from "./utils/MissionUtils.js";
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
	constructor() {
		this.carNames = [];
		this.tryCount = 0;
		this.carNamesAndNumberMap = [];
		this.carNamesAndDashMap = [];
	}

	async runRacingCar() {
		try {
			const { carNameValue, tryCountValue } = await this.getUserInput();
			this.carNames = carNameValue.split(",");
			this.tryCount = parseInt(tryCountValue, 10);

			await validateNameLength(carNameValue);
			await validateMaxCar(carNameValue);
			await validateMinCar(carNameValue);
			await validateDuplicateName(carNameValue);

			await validateMaxCount(tryCountValue);
			await validateString(tryCountValue);
			await validateMinCount(tryCountValue);

			this.carNamesAndNumberMap = await this.setCarNumberMap();
			this.carNamesAndDashMap = await this.changeNumbersToDash();
			this.printRunResults();
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

	async changeNumbersToDash() {
		const carNamesAndDashMap = this.carNamesAndNumberMap.map(
			({ carName, carNumbers }) => {
				const carDashes = carNumbers.map((number) => (number >= 4 ? "-" : ""));
				return { carName, carDashes };
			}
		);

		return carNamesAndDashMap;
	}

	printRunResults() {
		const totalResults = Array.from({ length: this.tryCount }, (_, i) => {
			return this.carNamesAndDashMap
				.map(({ carName, carDashes }) => {
					const dashes = carDashes.slice(0, i + 1).join("");
					return `${carName} : ${dashes}`;
				})
				.join("\n");
		});
		printOutput("\n실행 결과");
		totalResults.forEach((result) => {
			printOutput(result);
			printOutput("");
		});
	}
}

export default RacingCar;
