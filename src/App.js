import { Console } from "@woowacourse/mission-utils";
import { SEPARATOR } from "./constant.js";
import { validateRoundInput, validateName } from "./validation.js";
class Car {
    constructor(name) {
        validateName(name);
        this.name = name;
        this.moveScore = 0;
    }

    printName() {
        Console.print(this.name);
    }

    printMoveScore() {
        Console.print(this.moveScore);
    }
}

class App {
    async run() {
        const inputCar = await Console.readLineAsync(
            "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
        );

        const cars = inputCar
            .split(SEPARATOR)
            .map((car) => new Car(car.trim()));

        const inputRound = await Console.readLineAsync(
            "시도할 횟수는 몇 회인가요?\n"
        );

        validateRoundInput(inputRound);
    }
}

export default App;
