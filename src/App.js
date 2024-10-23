import { MissionUtils } from "@woowacourse/mission-utils";

const ERROR_MESSAGE = "[ERROR]";
const NUMBER_REGEX = /^[0-9]*$/;

class App {
  #carNames = [];
  #round = 0;

  #checkCarNamesError() {
    return this.#carNames.some((carName) => carName.length > 5);
  }

  #checkRoundError(round) {
    return !NUMBER_REGEX.test(round);
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

  async #readCarNames() {
    let carNamesInput = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    this.#carNames = carNamesInput.split(",");

    if (this.#checkCarNamesError()) {
      throw new Error(ERROR_MESSAGE);
    }

    this.#readRound();
  }

  async run() {
    await this.#readCarNames();
  }
}

export default App;
