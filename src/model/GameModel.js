import { MissionUtils } from '@woowacourse/mission-utils';

class GameModel {
	#cars;
	#rounds;
	#currentRound;
	constructor(cars, rounds) {
		this.#cars = cars;
		this.#rounds = rounds;
		this.#currentRound = 0;
	}

	runRound() {
		this.#cars.forEach((car, _) => {
			const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
			car.move(randomNumber);
		});
		this.#currentRound++;
	}

	getMaxPosition() {
		const positions = this.#cars.map((car) => car.getCurrentPosition());
		return Math.max(...positions);
	}

	getCarsAtPosition(position) {
		return this.#cars.filter((car) => car.getCurrentPosition() === position);
	}

	getWinnersName() {
		const maxPosition = this.getMaxPosition();
		const winnerCars = this.getCarsAtPosition(maxPosition);
		return winnerCars.map((car) => car.getName());
	}
}

export default GameModel;
