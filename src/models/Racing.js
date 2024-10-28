import { Car } from "./Car";

export class Racing {
	constructor(carNames, rounds) {
		this.cars = carNames.map((carName) => new Car(carName));
		this.rounds = rounds;
	}

	playRound() {
		this.cars.forEach((car) => car.move());
	}

	getWinners() {
		const maxPosition = Math.max(...this.cars.map((car) => car.position));
		const winners = this.cars.filter((car) => car.position === maxPosition).map((car) => car.carName);
		return winners.join(", ");
	}
}
