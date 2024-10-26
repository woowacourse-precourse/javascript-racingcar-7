import { Console } from "@woowacourse/mission-utils";

function getCarArray(CAR_STRING) {
  return CAR_STRING.split(",").map((car) =>
    car.trim()
  );
}

class App {
  async run() {
    const CAR_STR = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const CAR_ARRAY = getCarArray(CAR_STR);
  }
}

export default App;
