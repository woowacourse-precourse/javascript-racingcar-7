import Car from "./Car.js";
import Validation from "./Validation.js";
import { printOutput, userInput } from "./utils/missionUtils.js";

class CarRacing {
	constructor() {
		this.cars = [];
		this.tryCount = 0;
		this.validation = new Validation();
	}

	async runRacing() {
		try {
			await this.getUserInput();
			await this.validateInput();
			this.initializeCars();
			this.printRunResults();
			this.printWinners(this.calculateWinners());
		} catch (error) {
			console.error(error);
			throw new Error(`${error.message}`);
		}
	}

	async getUserInput() {
		const carNameValue = await userInput(
			"경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
		);
		const tryCountValue = await userInput("시도할 횟수는 몇 회인가요?\n");

		this.carNames = carNameValue.split(",");
		this.tryCount = parseInt(tryCountValue, 10);
	}

	async validateInput() {
		await this.validation.validateCarNames(this.carNames);
		await this.validation.validateTryCount(this.tryCount);
	}

	initializeCars() {
		this.cars = this.carNames.map((name) => {
			const car = new Car(name, this.tryCount);
			car.setRunResults();
			return car;
		});
	}

	printRunResults() {
		printOutput("\n실행 결과");

		for (let i = 0; i < this.tryCount; i++) {
			this.cars.forEach((car) => {
				car.printRunResult(i);
			});
			printOutput("");
		}
	}

	calculateWinners() {
		const dashCounts = this.cars.map((car) => ({
			carName: car.name,
			dashCount: car.getDashCount(),
		}));

		const maxDashCount = Math.max(
			...dashCounts.map(({ dashCount }) => dashCount)
		);

		if (maxDashCount === 0) {
			return [];
		}

		return dashCounts
			.filter(({ dashCount }) => dashCount === maxDashCount)
			.map(({ carName }) => carName);
	}

	printWinners(winners) {
		if (winners.length === 0) {
			printOutput("최종 우승자 : 우승자가 없습니다.");
		} else {
			printOutput(`최종 우승자 : ${winners.join(", ")}`);
		}
	}
}

export default CarRacing;
