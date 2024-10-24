import { Console, Random } from "@woowacourse/mission-utils";

export default class CarRacing {
  #names;
  #count;
  #movements;
  #firstRace;

  constructor(names, count, movements) {
    this.#names = names;
    this.#count = count;
    this.#movements = movements;
    this.#firstRace = true;
  }

  get carNames() {
    return [...this.#names];
  }

  get raceCount() {
    return this.#count;
  }

  get movements() {
    return [...this.#movements];
  }

  get info() {
    return {
      carNames: this.carNames,
      raceCount: this.raceCount,
      movements: this.movements,
    };
  }

  static async createInstance() {
    const names = await CarRacing.#getCarNamesAsync();
    CarRacing.#validateCarNames(names);

    const count = await CarRacing.#getRaceCountAsync();
    CarRacing.#validateRaceCount(count);

    const movements = CarRacing.#createMovements(names);

    return new CarRacing(names, count, movements);
  }

  static #throwErrorMessage(msg) {
    throw new Error(`[ERROR] ${msg}`);
  }

  static async #getCarNamesAsync() {
    const names = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    return names.split(",").filter(v => v !== "");
  }

  static #validateCarNames(names) {
    if (names.length < 1) {
      CarRacing.#throwErrorMessage("자동차 이름을 입력하세요.");
    }

    if (names.length !== new Set(names).size) {
      CarRacing.#throwErrorMessage("자동차 이름이 중복되었습니다.");
    }
  }

  static async #getRaceCountAsync() {
    const count = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

    return Number(count);
  }

  static #validateRaceCount(count) {
    if (isNaN(Math.sign(count))) {
      CarRacing.#throwErrorMessage("숫자만 입력하세요.");
    }

    if (Math.sign(count) < 1) {
      CarRacing.#throwErrorMessage("양수만 입력하세요.");
    }
  }

  static #createMovements(names) {
    return names.reduce((obj, name) => {
      obj.push([name, ""]);

      return obj;
    }, []);
  }

  startBroadCast() {
    if (this.#firstRace) this.#firstRace = false;

    Console.print("\n실행 결과");

    const { carNames: names, movements, raceCount: count } = this.info;

    for (let i = 0; i < count; i++) {
      for (let j = 0; j < names.length; j++) {
        CarRacing.#forwardOrStopCar(movements, j);
      }

      movements.forEach(car => {
        Console.print(car.join(" : "));
      });

      Console.print("");
    }
  }

  static #randomReturnTrueInRange(startRange, endRange, overNumber) {
    return Random.pickNumberInRange(startRange, endRange) >= overNumber;
  }

  static #forwardOrStopCar(movements, currentRace) {
    if (this.#randomReturnTrueInRange(0, 9, 4)) {
      movements[currentRace][1] += "-";
    }
  }

  get winners() {
    if (this.#firstRace) {
      CarRacing.#throwErrorMessage("경기를 1번 이상 진행하세요.");
    }

    const movements = this.#movements;
    const maxDistance = CarRacing.#maxMovement(movements);

    return movements
      .filter(car => car[1].length === maxDistance)
      .map(car => car[0])
      .join(", ");
  }

  static #maxMovement(movements) {
    movements.sort((a, b) => b[1].length - a[1].length);

    return movements[0][1].length;
  }
}
