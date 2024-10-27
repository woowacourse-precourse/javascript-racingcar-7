import { MissionUtils } from "@woowacourse/mission-utils";

class App {
    async run() {
        const carRace = new CarRace();
        await carRace.start();
    }
}

class Validator {
    static CAR_COUNT = 2;
    static ERROR_MESSAGES = {
        INVALID_ROUND_COUNT: "[ERROR] 시도 횟수는 1회 이상 30회 이하의 정수여야 합니다.",
        INVALID_CAR_COUNT: `[ERROR] 자동차 이름은 ${this.CAR_COUNT}개 이상이어야 합니다.`,
        DUPLICATED_CAR_NAME: "[ERROR] 자동차 이름은 중복되어서는 안됩니다.",
        INVALID_CAR_NAME_LENGTH: "[ERROR] 자동차 이름은 1자 이상 5자 이하여야 합니다.",
    };

    static validateRoundCount(attempts) {
        const attemptsNumber = Number(attempts);

        if (
            Number.isNaN(attemptsNumber) ||
            !Number.isInteger(attemptsNumber) ||
            attemptsNumber <= 0 ||
            attemptsNumber > 30
        ) {
            throw new Error(this.ERROR_MESSAGES.INVALID_ROUND_COUNT);
        }
    }

    static validateCarCount(carNames) {
        if (carNames.length < this.CAR_COUNT) {
            throw new Error(this.ERROR_MESSAGES.INVALID_CAR_COUNT);
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
            throw new Error(this.ERROR_MESSAGES.DUPLICATED_CAR_NAME);
        }
    }

    static validateCarNameLength(name) {
        if (name.length === 0 || name.length > 5) {
            throw new Error(this.ERROR_MESSAGES.INVALID_CAR_NAME_LENGTH);
        }
    }
}

class CarRace {
    #cars = [];
    #round = 0;
    static CAR_COUNT = 2;

    addCar(carNames) {
        this.#cars = carNames.map((car) => new Car(car));
    }

    setRound(round) {
        this.#round = round;
    }

    moveCars() {
        this.#cars.forEach((car) => car.move());
    }

    startRound() {
        this.moveCars();
        this.printResultByRound();
    }

    startRace() {
        MissionUtils.Console.print("\n실행 결과");

        Array.from({ length: this.#round }).forEach(() => {
            this.startRound();
            MissionUtils.Console.print("");
        });
    }

    printResultByRound() {
        this.#cars.forEach((car) => {
            const resultByRound = `${car.getName()} : ${car.getPosition()}`;
            MissionUtils.Console.print(resultByRound);
        });
    }

    getWinner() {
        const maxCarPositionLength = Math.max(...this.#cars.map((car) => car.getPosition().length));
        const winningCars = this.#cars.filter((car) => car.getPosition().length === maxCarPositionLength);

        return winningCars;
    }

    printWinner() {
        const winner = this.getWinner()
            .map((car) => car.getName())
            .join(", ");

        const winnerMessage = `최종 우승자 : ${winner}`;

        MissionUtils.Console.print(winnerMessage);
    }

    async getCarNames() {
        const carNamesString = await MissionUtils.Console.readLineAsync(
            "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
        );

        return carNamesString.split(",");
    }

    async getRoundCount() {
        const round = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
        return round;
    }

    async start() {
        const carNames = await this.getCarNames();
        const round = await this.getRoundCount();

        Validator.validateCarCount(carNames);
        Validator.validateUniqueCarNames(carNames);
        Validator.validateRoundCount(round);

        this.addCar(carNames);
        this.setRound(round);

        this.startRace();

        this.printWinner();
    }
}

class Car {
    #name;
    #position;

    constructor(name) {
        Validator.validateCarNameLength(name);
        this.#name = name;
        this.#position = "";
    }

    move() {
        const shouldMove = MissionUtils.Random.pickNumberInRange(0, 9) >= 4;

        if (shouldMove) {
            this.#position += "-";
        }
    }

    getName() {
        return this.#name;
    }

    getPosition() {
        return this.#position;
    }
}

export default App;
