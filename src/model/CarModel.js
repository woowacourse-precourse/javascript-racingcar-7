import { MINIMUM_RANDOMNUMBER_TO_MOVE } from '../constants/numbers.js';

class CarModel {
	#name;
	#currentPosition;
	constructor(name) {
		this.#name = name;
		this.#currentPosition = 0;
	}

	move(randomNumber) {
		if (this.canMove(randomNumber)) {
			this.#currentPosition++;
		}
	}

	canMove(randomNumber) {
		return randomNumber >= MINIMUM_RANDOMNUMBER_TO_MOVE;
	}

	getName() {
		return this.#name;
	}

	getCurrentPosition() {
		return this.#currentPosition;
	}
}

export default CarModel;
