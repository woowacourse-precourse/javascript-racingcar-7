import { Console, Random } from "@woowacourse/mission-utils";

class App {
    racingCars = {};

    initializeRacingCars(carNames) {
        carNames.forEach((carName) => {
            this.racingCars[carName] = 0;
        });
    }

    saveRacingCarPosition(carName, position) {
        this.racingCars[carName] = position;
    }

    getRacingCarPosition(carName) {
        return this.racingCars[carName];
    }

    getRacingCarNames() {
        return Object.keys(this.racingCars);
    }

    splitCarNamesStr(carNamesStr) {
        const carNames = carNamesStr.trim().split(",");
        return carNames.map((carName) => carName.trim());
    }

    isValidCarName(carName) {
        const regExp = /^[a-z|A-Z|가-힣]+$/; // 한글, 영문만 입력 가능

        if (carName.length > 5) {
            return false;
        }

        if (!carName.match(regExp)) {
            throw false;
        }

        return true;
    }

    hasUniqueCarNames(carNames) {
        const uniqueCarNames = new Set(); // 중복된 자동차 이름 체크

        carNames.forEach((carName) => {
            uniqueCarNames.add(carName.toLowerCase());
        });

        if (uniqueCarNames.size !== carNames.length) {
            return false;
        }

        return true;
    }

    isValidCarCount(carNames) {
        if (carNames.length < 2) {
            return false;
        }

        return true;
    }

    validateCarNames(carNamesStr) {
        const carNames = this.splitCarNamesStr(carNamesStr);

        if (!this.isValidCarCount(carNames)) {
            throw new Error("[ERROR] 자동차는 2대 이상 입력해주세요.");
        }

        carNames.forEach((carName) => {
            if (!this.isValidCarName(carName)) {
                throw new Error("[ERROR] 자동차 이름은 5자 이하 한글, 영문만 입력 가능합니다.");
            }
        });

        if (!this.hasUniqueCarNames(carNames)) {
            throw new Error("[ERROR] 중복된 자동차 이름이 존재합니다.");
        }

        return carNames;
    }

    validateTryCount(tryCount) {
        if (isNaN(tryCount)) {
            throw new Error("[ERROR] 시도 횟수는 숫자로 입력해주세요.");
        }

        const parsedTryCount = Number(tryCount);
        if (parsedTryCount < 1 || !Number.isInteger(parsedTryCount) || parsedTryCount > 10) {
            throw new Error("[ERROR] 시도 횟수는 1 이상 10이하 정수값을 입력해주세요.");
        }

        return parsedTryCount;
    }

    makeRandomNumber(min, max) {
        return Random.pickNumberInRange(min, max);
    }

    isPossibleMove() {
        return this.makeRandomNumber(0, 9) >= 4;
    }

    progressRacing() {
        const racingCarNames = this.getRacingCarNames();
        for (const carName of racingCarNames) {
            if (this.isPossibleMove()) {
                const carPosition = this.getRacingCarPosition(carName);
                this.saveRacingCarPosition(carName, carPosition + 1);
            }
        }
    }

    findMaxPositionUser() {
        const carNames = this.getRacingCarNames();
        const positions = carNames.map((carName) => this.getRacingCarPosition(carName));
        const maxPosition = Math.max(...positions);

        return carNames.filter((carName) => this.getRacingCarPosition(carName) === maxPosition);
    }

    makePrintableResult(carName, position) {
        return `${carName} : ${"-".repeat(position)}`;
    }

    printResult() {
        const racingCarNames = this.getRacingCarNames();
        for (const carName of racingCarNames) {
            const carPosition = this.getRacingCarPosition(carName);
            Console.print(this.makePrintableResult(carName, carPosition));
        }

        Console.print("\n");
    }

    solve(userInputCarNames, userInputTryCount) {
        const validatedCarNames = this.validateCarNames(userInputCarNames);
        let validatedTryCount = this.validateTryCount(userInputTryCount);

        this.initializeRacingCars(validatedCarNames);

        while (validatedTryCount--) {
            this.progressRacing();
            this.printResult();
        }

        return this.findMaxPositionUser();
    }

    async run() {
        const userInputCarNames = await Console.readLineAsync(
            "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
        );
        const userInputTryCount = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

        const winner = this.solve(userInputCarNames, userInputTryCount);

        Console.print(`최종 우승자 : ${winner.join(", ")}`);
    }
}

export default App;
