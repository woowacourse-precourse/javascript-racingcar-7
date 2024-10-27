import CarModel from './CarModel';

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
			car.move();
		});
		this.#currentRound++;
	}
}
