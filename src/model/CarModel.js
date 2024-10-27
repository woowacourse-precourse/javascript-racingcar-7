import { MINIMUM_RANDOMNUMBER_TO_MOVE } from '../constatns/numbers';

class CarModel {
	#name;
	#currentPosition;
	constructor(name) {
		this.#name = name;
		this.#currentPosition = 0;
	}

	move(randomNumber) {
		if (canMove(randomNumber)) {
			this.#currentPosition++;
		}
	}

	canMove(randomNumber) {
		return randomNumber >= MINIMUM_RANDOMNUMBER_TO_MOVE;
	}
}
