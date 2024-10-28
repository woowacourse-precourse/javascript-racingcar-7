import { Console, Random } from '@woowacourse/mission-utils';

class App {
	async getCarInput() {
		const carNamesInput = await Console.readLineAsync(
			'경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
		);
		if (!carNamesInput || carNamesInput.trim() === '') {
			throw new Error('[ERROR] 자동차 이름을 입력해야 합니다.');
		}

		const carNames = carNamesInput.split(',');

		if (carNames.some((name) => name.length > 5)) {
			throw new Error('[ERROR] 자동차 이름은 5자 이하로 입력해야 합니다.');
		}
		return carNames.map((name) => ({ name: name.trim(), position: 0 }));
	}

	async getCountInput() {
		const countInput = await Console.readLineAsync(
			'시도할 횟수는 몇 회인가요?\n'
		);
		const count = parseInt(countInput, 10);

		if (!Number.isInteger(count) || count <= 0) {
			throw new Error('[ERROR] 시도할 횟수는 1 이상의 정수여야 합니다.');
		}

		return count;
	}

	startRace(cars, tryCount) {
		for (let i = 0; i < tryCount; i++) {
			cars.forEach((car) => {
				if (Random.pickNumberInRange(0, 9) >= 4) {
					car.position += 1;
				}

				this.printRaceStatus(cars);
			});
		}
	}

	printRaceStatus(cars) {
		cars.forEach((car, idx) => {
			if (idx === cars.length - 1) {
				Console.print(`${car.name} : ${'-'.repeat(car.position)}\n`);
			}
			Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
		});
	}

	printWinner(cars) {
		const maxPosition = Math.max(...cars.map((car) => car.position));
		const winners = cars
			.filter((car) => car.position === maxPosition)
			.map((car) => car.name);
		Console.print(`최종 우승자 : ${winners.join(', ')}`);
	}

	async run() {
		try {
			const cars = await this.getCarInput();
			const tryCount = await this.getCountInput();

			this.startRace(cars, tryCount);
			this.printWinner(cars);
		} catch (error) {
			Console.print(error.message);
			throw error;
		}
	}
}

export default App;
