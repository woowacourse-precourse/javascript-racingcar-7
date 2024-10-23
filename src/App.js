import { Console } from "@woowacourse/mission-utils";
import { validateNames } from "./validate/validateNames.js";
import { validateTries } from "./validate/validateTries.js";
import { processRace } from "./race/processRace.js";


class App {
  async run() {
    const inputtedNames = await Console.readLineAsync('경주할 자동차 이름을 입력하세여;(이름은 쉼표(,) 기준으로 구분)\n');
    const names = validateNames(inputtedNames);
    const inputtedTries = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    const tries = validateTries(inputtedTries);
    const proceed = processRace(names, tries);
  }
}

export default App;
