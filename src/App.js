import { Console } from "@woowacourse/mission-utils";

function getCarArray(CAR_STRING) {
  return CAR_STRING.split(",").map((car) =>
    car.trim()
  );
}

function validateCarNames(CAR_ARRAY) {
  CAR_ARRAY.forEach((element) => {
    if (element.length >= 6) {
      throw new Error(
        "[ERROR] 자동차의 이름이 6자 이상입니다."
      );
    }
  });
}

class App {
  async run() {
    try {
      const CAR_STR = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );
      const CAR_ARRAY = getCarArray(CAR_STR);
      validateCarNames(CAR_ARRAY);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
