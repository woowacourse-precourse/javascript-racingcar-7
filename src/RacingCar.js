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

			this.printRunResults();
			const winners = await this.calculateWinners();
			this.printWinners(winners);
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

	printRunResults() {
		const maxLength = Math.max(
			...this.carNamesAndNumberMap.map((car) => car.carNumbers.length)
		);

		printOutput("\n실행 결과");

		for (let i = 0; i < maxLength; i++) {
			this.carNamesAndNumberMap.forEach((car) => {
				const dashes = car.carNumbers
					.slice(0, i + 1)
					.filter((num) => num >= 4)
					.map(() => "-")
					.join("");
				printOutput(`${car.carName} : ${dashes}`);
			});
			printOutput("");
		}
	}

	async calculateWinners() {
		const dashCounts = this.carNamesAndNumberMap.map(
			({ carName, carNumbers }) => {
				const dashCount = carNumbers.filter((dash) => dash >= 4).length;
				return { carName, dashCount };
			}
		);

		const maxDashCount = Math.max(
			...dashCounts.map(({ dashCount }) => dashCount)
		);

		return dashCounts
			.filter(({ dashCount }) => dashCount === maxDashCount)
			.map(({ carName }) => carName);
	}

	printWinners(winners) {
		const winnersString = winners.join(", ");
		printOutput(`최종 우승자 : ${winnersString}`);
	}
}

export default RacingCar;
