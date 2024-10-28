import { Console } from "@woowacourse/mission-utils";
import { splitStringByComma } from "./utils/carName.js";
import { convertStringToNumber } from "./utils/convertStringToNumber.js";
import { startRace } from "./utils/race.js";
import checkTryNumber from "./utils/checkTryNumber.js";

class App {
  async run() {
    const carName = (
      await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      )
    ).trim();

    const carNameObject = splitStringByComma(carName);

    const tryNumber = convertStringToNumber(
      (await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n")).trim()
    );

    checkTryNumber(tryNumber);

    startRace(tryNumber, carNameObject);
  }
}

export default App;
