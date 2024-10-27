import { inputHandler } from "./handlers/inputHandler.js";
import { DELIMITER, MESSAGES } from "./config/config.js";
import { convertNumber } from "./features/convertNumber.js";
import { parseStrings } from "./features/parseStrings.js";
import { setCarNames } from "./features/setCarNames.js";
import { moveFoward } from "./features/moveForward.js";
import { Console } from "@woowacourse/mission-utils";
import { getMaxForwards } from "./features/getMaxForwards.js";

class App {
  async run() {
    const inputCarNames = await inputHandler(MESSAGES.INPUT_CAR_NAME);
    const inputTryCount = await inputHandler(MESSAGES.INPUT_TRY_COUNT);

    const nameList = parseStrings(inputCarNames);
    const tryCount = convertNumber(inputTryCount);

    let carList = setCarNames(nameList);
    console.log(MESSAGES.MESSAGE_EXEC_RESULT);

    for (let i = 0; i < tryCount; i++) {
      carList = moveFoward(carList);
    }

    const result = getMaxForwards(carList);
    Console.print(`${MESSAGES.MESSAGE_FINAL_WINNER} : ${result.join(`${DELIMITER} `)}`);
  }
}

export default App;
