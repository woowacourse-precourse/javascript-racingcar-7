import {Car} from "./Car.js";
import {MissionUtils} from "@woowacourse/mission-utils/src";

class RacingGame {
    constructor(carNames) {
        this.cars = carNames.map((name) => new Car(name));
    }

    race(turns) {
        for (let i = 0; i < turns; i++) {
            this.cars.forEach((car) => {
                const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
                car.move(randomNumber);
            });
        }
    }

    getResults() {
        return this.cars.map((car) => ({
            name: car.name,
            position: car.getPosition(),
        }));
    }

    getWinners(){
        const maxPosition = Math.max(...this.cars.map((car) => car.getPosition()));
        return this.cars.filter((car) => cat.getPosition() === maxPosition)
            .map((car) => car.name);
    }
}

export default RacingGame;
