import { Console } from "@woowacourse/mission-utils";

function getCarArray(str) {
  return str.split(",").map((car) => car.trim());
}

function validateCarNames(array) {
  array.forEach((element) => {
    if (element.length >= 6) {
      throw new Error(
        "[ERROR] 자동차의 이름이 6자 이상입니다."
      );
    }
  });
}

function validateRacingCount(count) {
  if (isNaN(count)) {
    throw new Error(
      "[ERROR] 횟수의 형식이 숫자가 아닙니다."
    );
  }
}

class App {
  async run() {
    try {
      const CAR_STR = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );
      const CAR_ARRAY = getCarArray(CAR_STR);
      validateCarNames(CAR_ARRAY);
      const RACING_COUNT =
        await Console.readLineAsync(
          "시도할 횟수는 몇 회인가요?\n"
        );
      validateRacingCount(RACING_COUNT);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
