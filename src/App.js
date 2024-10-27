import Input from "./InputControl/Input.js";
import { checkCarNames, checkAttemptNumber } from "./InputControl/Check.js";
import { makeCarScore } from "./CarRacing/CarScore.js";
import { startCarRacing } from "./CarRacing/CarRacing.js";
import { maxScoreCar } from "./SearchWinner/SearchWinner.js";

class App {
  async run() {
    // 사용자에게 자동차 이름을 입력받고 쉼표(,) 기준으로 배열로 분리
    const car_names = await new Input().getCarNames();
    const car_names_split = car_names.split(",");

    // 사용자가 입력받은 자동차 이름의 앞뒤 공백을 없앰
    const car_names_arr = car_names_split.map((str) => str.trim());

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

    // 가장 높은 점수를 얻은 자동차 찾기
    maxScoreCar(car_names_arr, car_racing_result);
  }
}

export default App;
