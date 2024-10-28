import Car from "./Car.js";
import { Random, Console } from "@woowacourse/mission-utils";

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
            Console.print(`${car.getName()} : ${'-'.repeat(car.getPosition())}`);
        })
        Console.print('');
    }

    printWinners() {
        const maxPosition = Math.max(...this.cars.map(car => car.getPosition()));
        const winners = this.cars
            .filter(car => car.getPosition() === maxPosition)
            .map(car => car.getName());
        Console.print(`최종 우승자 : ${winners.join(', ')}`);
    }

    startRace() {
        Console.print('\n실행 결과');
        for (let i = 0; i< this.raceAttempts; i++) {
            this.runRound();
        }
        this.printWinners();
    }
}

export default Race;