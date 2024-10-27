import { Random } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class CarManager {
    #carList;
    static #FORWARD_THRESHOLD = 4;

    constructor(carNameList) {
        this.#carList = carNameList.map((name) => new Car(name));
    }

    moveCars() {
        this.#carList.forEach((car) => {
            this.#moveCar(car);
        });
    }

    #moveCar(car) {
        if (this.#isMovable()) {
            car.moveForward();
        }
    }

    printPositions() {
        this.#carList.forEach((car) => car.printPosition());
    }

    #isMovable() {
        const randomNumber = Random.pickNumberInRange(0, 9);
        return randomNumber >= CarManager.#FORWARD_THRESHOLD;
    }

    get carList() {
        return this.#carList;
    }
}

export default CarManager;
