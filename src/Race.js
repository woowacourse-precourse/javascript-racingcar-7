import Car from './Car.js';
import ViewIn from './view/ViewIn.js';
import ViewOut from './view/ViewOut.js';
import { parseCars } from './utils/parser.js';
import { sortScore } from './utils/sort.js';
import { validateCars } from './utils/validator/car.js';
import { validateCount } from './utils/validator/count.js';
import { THRESHOLD } from './constants/threshold.js';
import { Random } from '@woowacourse/mission-utils';

export default class Race {
	#cars;
	#count;
	#winner;

	async init() {
		const cars = await ViewIn.getCars();
		const count = await ViewIn.getCount();

		const carsArray = parseCars(cars);

		validateCars(carsArray);
		validateCount(count);

		this.#cars = carsArray.map((name) => new Car(name));
		this.#count = count;
	}

	start() {
		ViewOut.empty();
		ViewOut.resultMessage();
		this.#round();
		this.#selectWinner();
		ViewOut.raceWinner(this.#winner);
	}

	#round() {
		for (let i = 0; i < this.#count; i++) {
			this.#race();
			ViewOut.raceStatus(this.#cars);
		}
	}

	#race() {
		this.#cars.forEach((car) => {
			const randomNumber = Random.pickNumberInRange(
				THRESHOLD.MIN_RANDOM_NUMBER,
				THRESHOLD.MAX_RANDOM_NUMBER,
			);
			car.move(randomNumber);
		});
	}

	#selectWinner() {
		this.#cars = sortScore(this.#cars);
		const highScore = this.#cars[0].getPoints();
		this.#winner = this.#cars.filter((car) => car.getPoints() === highScore);
	}
}
