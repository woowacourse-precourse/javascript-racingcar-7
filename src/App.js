import { MissionUtils } from "@woowacourse/mission-utils";

const ERROR_MESSAGE = "[ERROR]";
const NUMBER_REGEX = /^[0-9]*$/;

class App {
  #car = {};
  #round = 0;

  async #readCarNames() {
    let carNamesInput = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    let carNames = carNamesInput.split(",");

    carNames.forEach((carName) => {
      this.#car[carName] = 0;
    });

    if (this.#checkCarNamesError()) {
      throw new Error(ERROR_MESSAGE);
    }
  }

  #checkCarNamesError() {
    return Object.keys(this.#car).some(
      (carName) => !carName.length || carName.length > 5
    );
  }

  async #readRound() {
    let roundInput = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );

    if (this.#checkRoundError(roundInput)) {
      throw new Error(ERROR_MESSAGE);
    }

    this.#round = Number(roundInput);
  }

  #checkRoundError(round) {
    return !round || !NUMBER_REGEX.test(round);
  }

  #executeRace() {
    Object.entries(this.#car).forEach(([carName, move]) => {
      if (Math.random() >= 0.4) {
        this.#car[carName] = move + 1;
      }
    });
  }

  async run() {
    await this.#readCarNames();
    await this.#readRound();

    while (this.#round > 0) {
      this.#executeRace();

      this.#round--;
    }
  }
}

export default App;
