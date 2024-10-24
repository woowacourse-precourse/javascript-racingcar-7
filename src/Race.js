import { Console, Random } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class Race {
    #carList;
    #tryCount;

    static #FORWARD_THRESHOLD = 4;

    constructor(carNameList, tryCount) {
        this.#carList = carNameList.map((carName) => new Car(carName));
        this.#tryCount = tryCount;
    }

    start() {
        Console.print("\n실행 결과");
        for (let i = 0; i < this.#tryCount; i++) {
            this.#moveCars();
            Console.print("\n");
        }
    }

    #moveCars() {
        this.#carList.forEach((car) => {
            this.#moveCar(car);
            car.printPosition();
        });
    }

    #moveCar(car) {
        const randomNumber = Race.#pickRandomNumber();
        if (Race.#isForward(randomNumber)) {
            car.moveForward();
        }
    }

    static #pickRandomNumber() {
        return Random.pickNumberInRange(0, 9);
    }

    static #isForward(number) {
        return number >= Race.#FORWARD_THRESHOLD;
    }

    #findWinner() {
        const maxPosition = Math.max(...this.#carList.map((car) => car.position));
        return this.#carList.filter((car) => car.position === maxPosition);
    }
}

export default Race;
