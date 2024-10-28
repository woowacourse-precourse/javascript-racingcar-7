import Car from "./Car.js";
import { Random } from "@woowacourse/mission-utils/src";

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
    }
}

export default Race;