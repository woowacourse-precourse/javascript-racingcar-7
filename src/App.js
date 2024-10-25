import { MissionUtils } from "@woowacourse/mission-utils";

class App {
    async run() {
        const carRace = new CarRace();
        carRace.start();
    }
}

class CarRace {
    constructor() {
        this.cars = [];
        this.round = 0;
    }

    addCar(carNames) {
        this.cars = carNames.map((car) => new Car(car));
    }

    setRound(round) {
        this.round = round;
    }

    async start() {
        const carNamesString = await MissionUtils.Console.readLineAsync(
            "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
        );
        const carNames = carNamesString.split(",");
        const attempts = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

        this.addCar(carNames);
        this.setRound(attempts);
    }
}

class Car {
    constructor(name) {
        this.name = name;
        this.position = 0;
    }
}

export default App;
