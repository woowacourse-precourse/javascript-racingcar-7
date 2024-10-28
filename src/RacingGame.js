import Console from '@woowacourse/mission-utils/Console';
import Car from './Car.js';

class RacingGame {
    constructor(carNames, rounds) {
        this.cars = carNames.map(name => new Car(name));
        this.rounds = rounds;
    }

    async play() {
        for (let i = 0; i < this.rounds; i++) {
            await this.executeRound();
        }
        this.printWinners();
    }

    async executeRound() {
        this.cars.forEach(car => car.move());
        this.printRoundResults();
    }

    printRoundResults() {
        this.cars.forEach(car => Console.print(`${car.name} : ${car.getPosition()}`));
        Console.print('');
    }

    printWinners() {
        const maxPosition = Math.max(...this.cars.map(car => car.position));
        const winners = this.cars
            .filter(car => car.position === maxPosition)
            .map(car => car.name)
            .join(', ');
        Console.print(`최종 우승자 : ${winners}`);
    }
}

export default RacingGame;
