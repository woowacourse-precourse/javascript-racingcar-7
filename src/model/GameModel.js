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
}
