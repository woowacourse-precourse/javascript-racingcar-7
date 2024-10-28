# javascript-racingcar-precourse

---

## 나만의 체크포인트

-   [x] 경주할 자동차 이름을 입력받는 메서드 구현
-   [x] 입력값 검증을 담당하는 객체 구현
-   [x] 입력값이 유효하지 않은 경우 에러를 발생시키는 메서드 구현
-   [x] 자동차 이름 입력이 유효한지 확인하는 메서드 구현
-   [x] 이름과 현재 위치를 가진 자동차 객체 구현
-   [x] 자동차가 전진하는 메서드 구현
-   [x] 전진을 시도할 횟수를 입력받는 메서드 구현
-   [x] 전진 횟수 입력이 유효한지 확인하는 메서드 구현
-   [x] 경주 로직을 담당하는 객체 구현
-   [x] 무작위 값을 생성하는 메서드 구현
-   [x] 무작위 값이 4 이상인지 확인하는 메서드 구현
-   [x] 자동차의 이름과 위치를 출력하는 메서드 구현
-   [x] 전진 횟수에 따라 게임을 진행하는 메서드 구현
-   [x] 우승자를 판단하는 메서드 구현
-   [x] 우승자를 출력하는 메서드 구현

---

## 자동차 경주 동작 과정

### App 클래스

```javascript
class App {
    async run() {
        const inputCarNames = await this.getInputCarNames();
        InputValidator.validateInputCarNames(inputCarNames);
        const carNameList = inputCarNames.split(",");

        const inputTryCount = await this.getInputTryCount();
        InputValidator.validateInputTryCount(inputTryCount);
        const tryCount = Number(inputTryCount);

        const newRace = new Race(carNameList, tryCount);
        newRace.start();
    }

    async getInputCarNames() {
        try {
            const message = "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n";
            const inputCarNames = await Console.readLineAsync(message);
            return inputCarNames;
        } catch (error) {}
    }

    async getInputTryCount() {
        try {
            const message = "시도할 횟수는 몇회인가요?\n";
            const inputTryCount = await Console.readLineAsync(message);
            return inputTryCount;
        } catch (error) {}
    }
}
```

-   경주 게임의 진행을 담당하는 클래스
-   경주할 자동차 이름과 시도할 횟수를 Console API를 통해 입력받음
-   InputValidator 클래스의 정적 메서드를 통해 입력값의 유효성을 검사
-   입력받은 값으로 Race 객체를 생성하고 start 메서드를 호출

### InputValidator 클래스

```javascript
class InputValidator {
    static ERROR_MESSAGES = Object.freeze({
        CAR_NAME_EMPTY: "자동차 이름이 입력되지 않았습니다.",
        INVALID_NAME: "자동차 이름은 1~5글자여야 하며, 공백이나 특수 문자는 포함할 수 없습니다.",
        DUPLICATED_NAME: "중복되는 자동차 이름이 있습니다.",
        TRY_COUNT_EMPTY: "시도 횟수가 입력되지 않았습니다.",
        INVALID_TRY_COUNT: "시도 횟수는 1 이상의 정수여야 합니다.",
    });

    static validateInputCarNames(inputCarNames) {
        const carNameList = inputCarNames.split(",");
        const regex = /^[a-zA-Z가-힣0-9]{1,5}$/;

        if (carNameList.length === 0 || (carNameList.length === 1 && carNameList[0] === "")) {
            InputValidator.#throwError(InputValidator.ERROR_MESSAGES.CAR_NAME_EMPTY);
        } else if (!carNameList.every((carName) => regex.test(carName))) {
            InputValidator.#throwError(InputValidator.ERROR_MESSAGES.INVALID_NAME);
        }
        // 중복된 자동차 이름을 체크
        else if (carNameList.length !== new Set(carNameList).size) {
            InputValidator.#throwError(InputValidator.ERROR_MESSAGES.DUPLICATED_NAME);
        }
    }

    static validateInputTryCount(inputTryCount) {
        if (!inputTryCount) {
            InputValidator.#throwError(InputValidator.ERROR_MESSAGES.TRY_COUNT_EMPTY);
        }

        const tryCount = Number(inputTryCount);
        if (!Number.isInteger(tryCount) || tryCount < 1) {
            InputValidator.#throwError(InputValidator.ERROR_MESSAGES.INVALID_TRY_COUNT);
        }
    }

    static #throwError(message) {
        throw new Error(`[ERROR] ${message}`);
    }
}
```

-   입력값의 유효성을 검사하는 클래스
-   에러 메시지를 정의하고 Object.freeze 메서드를 사용하여 객체를 불변하게 만듬
-   정적 메서드 validateInputCarNames와 validateInputTryCount를 통해 입력값의 유효성을 검사
-   입력값이 유효하지 않은 경우 에러를 발생시키는 정적 메서드 #throwError를 구현

### Race 클래스

```javascript
class Race {
    #carManager;
    #winnerDeterminer;
    #tryCount;

    constructor(carNameList, tryCount) {
        this.#carManager = new CarManager(carNameList);
        this.#winnerDeterminer = new WinnerDeterminer(this.#carManager.carList);
        this.#tryCount = tryCount;
    }

    start() {
        Console.print("\n실행 결과");
        for (let i = 0; i < this.#tryCount; i++) {
            this.#carManager.moveCars();
            this.#carManager.printPositions();
            Console.print("\n");
        }
        this.#winnerDeterminer.printWinners();
    }
}
```

-   경주 게임의 로직을 담당하는 클래스
-   CarManager 클래스와 WinnerDeterminer 클래스를 생성자에서 초기화
-   start 메서드를 통해 전진 시도 횟수만큼 경주 게임을 진행
-   CarManager 객체의 moveCars 메서드로 각 자동차들을 전진시킴
-   CarManager 객체의 printPositions 메서드로 각 자동차들의 현재 위치를 출력
-   게임이 종료되면 WinnerDeterminer 객체의 printWinners 메서드로 우승자를 출력

### CarManager 클래스

```javascript
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
```

-   자동차 객체들을 관리하는 클래스
-   생성자에서 자동차 이름 리스트를 받아 각 자동차 객체를 생성
-   moveCars 메서드를 통해 각 자동차 객체를 전진시킴
-   #moveCar 메서드를 통해 전진이 가능한 경우 자동차 객체를 전진시킴
-   #isMovable 메서드를 통해 무작위 값을 생성하고 4 이상인지 확인
-   printPositions 메서드를 통해 각 자동차 객체의 현재 위치를 출력

### Car 클래스

```javascript
class Car {
    #name;
    #position;

    static #CAR_POSITION_SYMBOL = "-";

    constructor(name) {
        this.#name = name;
        this.#position = 0;
    }

    moveForward() {
        this.#position += 1;
    }

    printPosition() {
        Console.print(`${this.#name} : ${Car.#CAR_POSITION_SYMBOL.repeat(this.#position)}`);
    }

    get name() {
        return this.#name;
    }

    get position() {
        return this.#position;
    }
}
```

-   자동차 객체를 생성하는 클래스
-   생성자에서 자동차 이름을 받아 초기 위치를 0으로 설정
-   moveForward 메서드를 통해 위치를 1 증가시킴
-   printPosition 메서드를 통해 자동차 객체의 현재 위치를 출력

### WinnerDeterminer 클래스

```javascript
class WinnerDeterminer {
    #carList;

    constructor(carList) {
        this.#carList = carList;
    }

    #findWinners() {
        const maxPosition = Math.max(...this.#carList.map((car) => car.position));
        return this.#carList.filter((car) => car.position === maxPosition);
    }

    printWinners() {
        const winners = this.#findWinners();
        const winnerNames = winners.map((car) => car.name).join(", ");
        Console.print(`최종 우승자 : ${winnerNames}`);
    }
}
```

-   우승자를 판단하고 출력하는 클래스
-   생성자에서 자동차 리스트를 받아 저장
-   #findWinners 메서드를 통해 가장 높은 위치에 있는 자동차들을 찾아 반환
-   printWinners 메서드를 통해 우승자들의 이름을 출력

---

## 스스로 판단한 사항

-   쉼표로 시작하거나 끝나는 경우는 유효하지 않음
-   자동차 이름이 중복되는 경우는 유효하지 않음
-   자동차 이름은 영문, 한글, 숫자로 구성되어야 함

---

## 고민해 볼 사항

-   CarManager 클래스의 moveCars 메서드와 #moveCar 메서드를 분리할 필요가 있을까?
