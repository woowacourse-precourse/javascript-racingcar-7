import { MissionUtils } from "@woowacourse/mission-utils";
import { separateCarList, playGame, printWinner } from "./Function.js";
class App {
  async run() {
    const car_name = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) \n"
    );
    const car_list = separateCarList(car_name);
    // 자동차 이름이 5자 이상이면 에러 처리

    const try_number = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요? \n"
    );
    //횟수가 양의 정수가 아니면 에러 처리

    MissionUtils.Console.print("\n실행 결과");
    const carDistance = playGame(car_list, try_number);
    printWinner(car_list, carDistance);
  }
}

export default App;
