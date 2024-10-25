import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';

class Race {
    constructor(carsList) {
        this.cars = carsList.map(name => new Car(name));
    }

    start() {
        this.cars.forEach(car => car.go());
    }

    eachRoundResult() {
        return this.cars.map(car => car.roundResult());
    }

    winnerResult() {
        const maxPosition = Math.max(...this.cars.map(car => car.position));
        return this.cars.filter(car => car.position === maxPosition).map(car => car.name);
    }
}

export default Race;