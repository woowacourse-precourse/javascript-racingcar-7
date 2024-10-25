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
      if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
        this.#car[carName] = move + 1;
      }

      this.#printRound(carName, this.#car[carName]);
    });
  }

  #printRound(carName, move) {
    MissionUtils.Console.print(`${carName} : ${"-".repeat(move)}`);
  }

  #printWinner() {
    let biggerMove = -Infinity;
    let winners = [];

    Object.entries(this.#car).forEach(([carName, move]) => {
      if (move > biggerMove) {
        biggerMove = move;
        winners = [carName];
      } else if (biggerMove === move) {
        winners.push(carName);
      }
    });

    MissionUtils.Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }

  async run() {
    await this.#readCarNames();
    await this.#readRound();

    while (this.#round > 0) {
      this.#executeRace();

      this.#round--;
    }

    this.#printWinner();
  }
}

export default App;
