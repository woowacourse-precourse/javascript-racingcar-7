import { Console, Random } from "@woowacourse/mission-utils";

class App {
    racingCars = {};

    validateCarName(carNameList) {
        const carNames = carNameList.trim().split(",");

        if (carNames.length < 2) {
            throw new Error("[ERROR] 자동차는 2대 이상 입력해주세요.");
        }

        const regExp = /^[a-zA-Z가-힣]$/; // 한글, 영문만 입력 가능
        const uniqueCarNames = new Set(); // 중복된 자동차 이름 체크

        const validatedCarNames = carNames.map((carName) => {
            const trimmedCarName = carName.trim();

            if (trimmedCarName.length > 5) {
                throw new Error("[ERROR] 자동차 이름은 5자 이하로 입력해주세요.");
            } else if (!trimmedCarName.match(regExp)) {
                throw new Error("[ERROR 자동차 이름은 한글, 영문만 입력 가능합니다.");
            }

            uniqueCarNames.add(trimmedCarName.toLowerCase());
            return trimmedCarName;
        });

        if (uniqueCarNames.size !== carNames.length) {
            throw new Error("[ERROR] 중복된 자동차 이름이 존재합니다.");
        }

        return validatedCarNames;
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

    saveRacingCars(carNames) {
        carNames.forEach((carName) => {
            this.racingCars[carName] = 0;
        });
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

    makeRandomNumber(min, max) {
        return Random.pickNumberInRange(min, max);
    }

    isPossibleMove() {
        return this.makeRandomNumber(0, 9) >= 4;
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

    progressRacing() {
        const racingCarNames = this.getRacingCarNames();
        for (const carName of racingCarNames) {
            if (this.isPossibleMove()) {
                const carPosition = this.getRacingCarPosition(carName);
                this.saveRacingCarPosition(carName, carPosition + 1);
            }
        }
    }

    solve(userInputCarNames, userInputTryCount) {
        this.saveRacingCars(userInputCarNames);

        while (userInputTryCount--) {
            this.progressRacing();
            this.printResult();
        }
    }

    async run() {
        const userInputCarName = await Console.readLineAsync(
            "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
        );
        const userInputTryCount = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

        const validatedCarNames = this.validateCarName(userInputCarName);
        const validatedTryCount = this.validateTryCount(userInputTryCount);

        this.solve(validatedCarNames, validatedTryCount);
    }
}

export default App;
