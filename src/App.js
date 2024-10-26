import { MissionUtils } from "@woowacourse/mission-utils";

class App {
    async run() {
        const carRace = new CarRace();
        await carRace.start();
    }
}

class Validator {
    static validateRoundCount(attempts) {
        const attemptsNumber = Number(attempts);

        if (
            Number.isNaN(attemptsNumber) ||
            !Number.isInteger(attemptsNumber) ||
            attemptsNumber <= 0 ||
            attemptsNumber > 30
        ) {
            const errorMessage = "[ERROR] 시도 횟수는 1회 이상 30회 이하의 정수여야 합니다.";
            throw new Error(errorMessage);
        }
    }

    static validateCarCountGraterThanTwo(carNames) {
        if (carNames.length < 2) {
            const errorMessage = "[ERROR] 자동차는 2대 이상이어야 합니다.";
            throw new Error(errorMessage);
        }
    }

    static validateUniqueCarNames(carNames) {
        const set = new Set();

        const isCarNameUnique = carNames.every((carName) => {
            if (set.has(carName)) {
                return false;
            }

            set.add(carName);
            return true;
        });

        if (!isCarNameUnique) {
            const errorMessage = "[ERROR] 자동차 이름은 중복되어서는 안됩니다.";
            throw new Error(errorMessage);
        }
    }

    static validateCarNameLength(name) {
        if (name.length === 0 || name.length > 5) {
            const errorMessage = "[ERROR] 자동차 이름은 1자 이상 5자 이하여야 합니다.";
            throw new Error(errorMessage);
        }
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

    startRound() {
        this.cars.forEach((car) => car.move());
        this.cars.forEach((car) => this.printResultByRound(car));
    }

    startRace() {
        MissionUtils.Console.print("\n실행 결과");

        Array.from({ length: this.round }).forEach(() => {
            this.startRound();
            MissionUtils.Console.print("");
        });
    }

    printResultByRound(car) {
        const resultByRound = `${car.getName()} : ${car.getPosition()}`;
        MissionUtils.Console.print(resultByRound);
    }

    async start() {
        const carNamesString = await MissionUtils.Console.readLineAsync(
            "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
        );
        const carNames = carNamesString.split(",");
        const round = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

        Validator.validateCarCountGraterThanTwo(carNames);
        Validator.validateUniqueCarNames(carNames);
        Validator.validateRoundCount(round);

        this.addCar(carNames);
        this.setRound(round);

        this.startRace();
    }
}

class Car {
    constructor(name) {
        Validator.validateCarNameLength(name);
        this.name = name;
        this.position = "";
    }

    move() {
        const shouldMove = MissionUtils.Random.pickNumberInRange(0, 9) >= 4;

        if (shouldMove) {
            this.position += "-";
        }
    }

    getName() {
        return this.name;
    }

    getPosition() {
        return this.position;
    }
}

export default App;
