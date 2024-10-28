import { Random } from "@woowacourse/mission-utils";

export class Car {
	constructor(carName) {
		this.carName = carName;
		this.position = 0;
	}

	move() {
		const randomNumber = Random.pickNumberInRange(0, 9);
		if (randomNumber >= 4) this.position += 1;
	}

	getPosition() {
		return "-".repeat(this.position);
	}
}
