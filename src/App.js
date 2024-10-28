import { MissionUtils } from "@woowacourse/mission-utils";
import {
  separateCarList,
  startGame,
  printWinner,
  checkNameError,
  checkNumberError,
} from "./Function.js";
import {
  CAR_NAME_INPUT,
  TRY_NUMBER_INPUT,
  ANSWER_START,
  ENTER,
} from "./Constant.js";

class App {
  async run() {
    const car_name = await MissionUtils.Console.readLineAsync(
      CAR_NAME_INPUT + ENTER
    );
    const car_list = separateCarList(car_name);
    checkNameError(car_list);

    const try_number = await MissionUtils.Console.readLineAsync(
      TRY_NUMBER_INPUT + ENTER
    );
    checkNumberError(try_number);

    MissionUtils.Console.print(ENTER + ANSWER_START);
    const carDistance = startGame(car_list, try_number);
    printWinner(car_list, carDistance);
  }
}

export default App;
