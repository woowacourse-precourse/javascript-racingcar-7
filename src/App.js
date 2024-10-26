import { Console, MissionUtils } from "@woowacourse/mission-utils";
import { Car } from "./model/Car.js";
import { SEPARATOR } from "./constant.js";
import { validateRoundInput } from "./validation.js";

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

        Console.print("\n실행 결과");

        for (let i = 0; i < inputRound; i++) {
            cars.map((car) => car.move());
            Console.print("\n");
        }
    }
}

export default App;
