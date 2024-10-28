import Car from "./Car.js";
import { Random, Console } from "@woowacourse/mission-utils/src";

class Race {
    constructor(carNames, raceAttempts) {
        this.cars = this.createCars(carNames);
        this.raceAttempts = raceAttempts;
    }

    createCars(carNames) {
        return carNames.map(name => new Car(name));
    }

    runRound() {
        this.cars.forEach(car => {
            if(Random.pickNumberInRange(0,9) >= 4) {
                car.move();
            }
        })
        this.printRoundResults();
    }

    printRoundResults() {
        this.cars.forEach(car => {
            Console.print(`${car.getName} : ${'-'.repeat(car.getPosition())}`);
        })
        Console.print('');
    }
}

export default Race;