import { readInput } from "./util/missionUtil";
import { validateCarNames, validateTryCount } from "./util/validation";
import Race from "./Race";

class App {
  async play() {
    const carNames = await this.#getCarNames();
    const tryCount = await this.#getTryCount();

    const race = new Race(carNames);
    race.race(tryCount);
  }

  async #getCarNames() {
    const input = await readInput(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    return validateCarNames(input);
  }

  async #getTryCount() {
    const input = await readInput("시도할 횟수는 몇 회인가요?");
    return validateTryCount(input);
  }

  async run() {
    try {
      await this.play();
    } catch (error) {
      throw error;
    }
  }
}

export default App;
