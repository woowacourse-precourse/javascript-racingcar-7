import Car from './Car.js';

import { parseCars } from './utils/parser.js';
import { sortScore } from './utils/sort.js';
import { validateCars } from './utils/validator/car.js';
import { validateCount } from './utils/validator/count.js';
import { THRESHOLD } from './constants/threshold.js';
import { Random } from '@woowacourse/mission-utils';
import { getCars, getCount } from './utils/view/input.js';
import {
	showEmpty,
	showRaceStatus,
	showRaceWinner,
	showResultMessage,
} from './utils/view/output.js';

export default class Race {
	#cars;
	#count;
	#winner;

	async init() {
		const cars = await getCars();
		const count = await getCount();

		const carsArray = parseCars(cars);

		validateCars(carsArray);
		validateCount(count);

		this.#cars = carsArray.map((name) => new Car(name));
		this.#count = count;
	}

	start() {
		showEmpty();
		showResultMessage();
		this.#round();
		this.#selectWinner();
		showRaceWinner(this.#winner);
	}

	#round() {
		for (let i = 0; i < this.#count; i++) {
			this.#race();
			showRaceStatus(this.#cars);
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
