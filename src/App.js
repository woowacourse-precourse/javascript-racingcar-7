import {Console, Random} from "@woowacourse/mission-utils";

// 상수 정의

export const GAME_CONSTANTS = {
  MIN_NAME_LENGTH: 1,

  MAX_NAME_LENGTH: 5,

  MIN_RANDOM: 0,

  MAX_RANDOM: 9,

  FORWARD_THRESHOLD: 4,
};

export const ERROR_MESSAGES = {
  INVALID_NAME_LENGTH:
    "[ERROR] 자동차 이름은 최소 1자 이상, 최대 5자 이하이어야 합니다.",

  INVALID_ATTEMPTS: "[ERROR] 시도 횟수는 0 이상의 정수여야 합니다.",

  EMPTY_INPUT: "[ERROR] 자동차 이름을 1개 이상 입력해야 합니다.",

  DUPLICATE_NAMES: "[ERROR] 자동차 이름은 중복될 수 없습니다.",
};

/**

 * @typedef {Object} Car

 * @property {string} name - 자동차 이름

 * @property {number} position - 현재 위치

 */

class App {
  /**

   * 게임을 실행하는 메인 메서드

   * @returns {Promise<void>}

   */

  async run() {
    try {
      const validatedNames = await this.processCarNames();

      const attempts = await this.getAttempts();

      this.printInitialStatus(validatedNames, attempts);

      const cars = this.initializeCars(validatedNames);

      await this.playGame(cars, attempts);

      this.announceWinners(cars);
    } catch (error) {
      Console.print(error.message);

      throw error;
    }
  }

  /**

   * 자동차 이름 입력 및 검증 처리

   * @returns {Promise<string[]>}

   */

  async processCarNames() {
    const carNames = await this.getCarNames();

    return this.validateCarNames(carNames);
  }

  /**

   * 자동차 이름 입력 받기

   * @returns {Promise<string>}

   */

  async getCarNames() {
    return await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
  }

  /**

   * 자동차 이름 유효성 검증

   * @param {string} names

   * @returns {string[]}

   */

  validateCarNames(names) {
    const carNames = names.split(",").map((name) => name.trim());

    // 빈 입력 체크를 가장 먼저 수행
    if (carNames.length === 0 || carNames.every((name) => name === "")) {
      throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
    }

    // 중복 체크
    const uniqueNames = new Set(carNames);
    if (uniqueNames.size !== carNames.length) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_NAMES);
    }

    // 이름 길이 체크
    for (const name of carNames) {
      if (
        name.length < GAME_CONSTANTS.MIN_NAME_LENGTH ||
        name.length > GAME_CONSTANTS.MAX_NAME_LENGTH
      ) {
        throw new Error(ERROR_MESSAGES.INVALID_NAME_LENGTH);
      }
    }

    return carNames;
  }

  /**

   * 시도 횟수 입력 및 검증

   * @returns {Promise<number>}

   */

  async getAttempts() {
    const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");

    const attempts = parseInt(input, 10);

    if (attempts <= 0 || input.includes(".") || isNaN(attempts)) {
      throw new Error(ERROR_MESSAGES.INVALID_ATTEMPTS);
    }

    return attempts;
  }

  /**

   * 초기 상태 출력

   * @param {string[]} names

   * @param {number} attempts

   */

  printInitialStatus(names, attempts) {
    Console.print(`입력한 자동차 이름: ${names.join(", ")}`);

    Console.print(`시도할 횟수: ${attempts}`);
  }

  /**

   * 자동차 객체 초기화

   * @param {string[]} names

   * @returns {Car[]}

   */

  initializeCars(names) {
    return names.map((name) => ({name, position: 0}));
  }

  /**

   * 게임 진행

   * @param {Car[]} cars

   * @param {number} attempts

   */

  async playGame(cars, attempts) {
    for (let i = 0; i < attempts; i++) {
      this.moveCars(cars);

      this.printRoundResult(cars);
    }
  }

  /**

   * 자동차들을 이동

   * @param {Car[]} cars

   */

  moveCars(cars) {
    cars.forEach((car) => {
      const randomNumber = Random.pickNumberInRange(
        GAME_CONSTANTS.MIN_RANDOM,

        GAME_CONSTANTS.MAX_RANDOM
      );

      if (randomNumber >= GAME_CONSTANTS.FORWARD_THRESHOLD) {
        car.position += 1;
      }
    });
  }

  /**

   * 라운드 결과 출력

   * @param {Car[]} cars

   */

  printRoundResult(cars) {
    cars.forEach((car) => {
      Console.print(`${car.name} : ${"-".repeat(car.position)}`);
    });

    Console.print(""); // 라운드 구분을 위한 빈 줄
  }

  /**

   * 우승자 결정

   * @param {Car[]} cars

   * @returns {string[]}

   */

  determineWinners(cars) {
    const maxPosition = Math.max(...cars.map((car) => car.position));

    return cars

      .filter((car) => car.position === maxPosition)

      .map((car) => car.name);
  }

  /**

   * 우승자 발표

   * @param {Car[]} cars

   */

  announceWinners(cars) {
    const winners = this.determineWinners(cars);

    Console.print(`최종 우승자: ${winners.join(", ")}`);
  }
}

export default App;
