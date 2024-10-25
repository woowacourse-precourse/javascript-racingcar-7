import Input from "./Component/Input.js";
import { checkCarNames, checkAttemptNumber } from "./Component/Check.js";
import { makeCarScore } from "./Component/CarScore.js";
import { startCarRacing } from "./Component/CarRacing.js";

class App {
  async run() {
    // 사용자에게 자동차 이름을 입력받고 쉼표(,) 기준으로 배열로 분리
    const car_names = await new Input().getCarNames();
    const car_names_arr = car_names.split(",");

    // 사용자가 올바르게 자동차 이름을 입력했는지 검사
    checkCarNames(car_names_arr);

    // 사용자에게 시도 횟수를 입력받고 검사
    const attempt_number = await new Input().getAttemptNumber();
    checkAttemptNumber(attempt_number);

    // 자동차 경주에 필요한 점수 배열 만들기
    const car_score_arr = makeCarScore(car_names_arr);

    // 자동차 경주 시작하고 결과값 얻기
    const car_racing_result = startCarRacing(
      car_names_arr,
      car_score_arr,
      attempt_number
    );
  }
}

export default App;
