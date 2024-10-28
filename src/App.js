import { Console } from "@woowacourse/mission-utils";
import { Car } from "./model/Car.js";
import { runRace, getWinners } from "./util.js";
import { SEPARATOR } from "./constant.js";
import { validateName, validateRoundInput } from "./validation.js";

class App {
    async run() {
        const inputCar = await Console.readLineAsync(
            "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
        );

        const names = inputCar.split(SEPARATOR).map(car => car.trim());
        validateName(names);
        const cars = names.map((name) => new Car(name));

        const inputRound = await Console.readLineAsync(
            "시도할 횟수는 몇 회인가요?\n"
        );

        validateRoundInput(inputRound);

        Console.print("\n실행 결과");
        runRace(cars, inputRound);

        Console.print("최종 우승자 : " + getWinners(cars));
    }
}

export default App;
