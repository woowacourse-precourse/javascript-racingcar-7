import Input from "./Component/Input.js";
import Check from "./Component/Check.js";

class App {
  async run() {
    // 사용자에게 자동차 이름을 입력받고 배열로 분리
    const car_names = await new Input().getCarNames();
    const car_names_arr = car_names.split(",");

    // 사용자가 올바르게 자동차 이름을 입력했는지 검사
    await new Check().checkCarNames(car_names_arr);

    // 사용자에게 시도 횟수를 입력받고 검사
    const attempt_number = await new Input().getAttemptNumber();
    await new Check().checkAttemptNumber(attempt_number);
  }
}

export default App;
