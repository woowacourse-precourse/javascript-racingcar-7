import CarModel from './CarModel';

class GameModel {
	#cars;
	#rounds;
	constructor(cars, rounds) {
		this.#cars = cars;
		this.#rounds = rounds;
	}
}
