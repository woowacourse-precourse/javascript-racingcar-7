import {
  Console,
  MissionUtils,
} from "@woowacourse/mission-utils";

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

function randomRacing(car) {
  const RANDOM_NUM =
    MissionUtils.Random.pickNumberInRange(0, 9);

  if (RANDOM_NUM >= 4) {
    return car + "-";
  }
  return car + "";
}

function startRacing(array, count) {
  const UPDATE_ARRAY = array.map(
    (element) => element + " : "
  );
  let currentCount = 0;

  UPDATE_ARRAY.forEach((element) => {
    if (currentCount >= count) return;
    randomRacing(element);
    Console.print(element);
    currentCount++;
  });

  return UPDATE_ARRAY;
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

      Console.print("\n실행 결과\n");

      startRacing(CAR_ARRAY, RACING_COUNT);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
