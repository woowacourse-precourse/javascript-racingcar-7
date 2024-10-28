import { Random, Console } from "@woowacourse/mission-utils";

class RacingCar {
    constructor(carNames) {
        this.cars = carNames.map((name) => ({ name, position: 0 }));
    }

    startRace(tryCount) {
        for (let i = 0; i < tryCount; i++) {
            this.runRound();
            this.printRoundStatus();
        }
    }

    runRound() {
        this.cars.forEach((car) => {
            this.moveCar(car);
        });
    }

    moveCar(car) {
        const randomNumber = Random.pickNumberInRange(0, 9);
        if (this.shouldMove(randomNumber)) {
            car.position += 1;
        }
    }

    shouldMove(randomNumber) {
        return randomNumber >= 4;
    }

    printRoundStatus() {
        this.cars.forEach((car) => {
            this.printCarStatus(car);
        });
        Console.print("");
    }

    printCarStatus(car) {
        Console.print(`${car.name} : ${"-".repeat(car.position)}`);
    }
}

export default RacingCar;
