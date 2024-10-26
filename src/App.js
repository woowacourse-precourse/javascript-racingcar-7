import { Console } from "@woowacourse/mission-utils";
class Car {
    constructor(name) {
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
        try {
            const inputCar = await Console.readLineAsync(
                "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
            );

            const cars = inputCar.split(",").map((car) => new Car(car.trim()));
        } catch (error) {
            Console.print(`${error.message}`);
            throw error;
        }
    }
}

export default App;
