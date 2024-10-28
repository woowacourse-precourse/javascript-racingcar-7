import { MissionUtils } from "@woowacourse/mission-utils";
import { separateCarList, playGame, printWinner } from "./Function.js";
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
    // 자동차 이름이 5자 이상이면 에러 처리

    const try_number = await MissionUtils.Console.readLineAsync(
      TRY_NUMBER_INPUT + ENTER
    );
    //횟수가 양의 정수가 아니면 에러 처리

    MissionUtils.Console.print(ENTER + ANSWER_START);
    const carDistance = playGame(car_list, try_number);
    printWinner(car_list, carDistance);
  }
}

export default App;
