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
  return car;
}

function startRacing(array, count) {
  let UPDATE_ARRAY = array.map(
    (element) => element + " : "
  );

  for (let i = 0; i < count; i++) {
    UPDATE_ARRAY = UPDATE_ARRAY.map((car) =>
      randomRacing(car)
    );
    UPDATE_ARRAY.forEach((result) =>
      Console.print(result)
    );

    Console.print(""); // 줄바꿈
  }

  return UPDATE_ARRAY;
}

function determineWinner(array) {
  const DISTANCES = array.map((car) => ({
    NAME: car.split(" :")[0],
    DISTANCE: (car.match(/-/g) || []).length,
  }));

  const MAX_DISTANCE = Math.max(
    ...DISTANCES.map((car) => car.DISTANCE)
  );

  const WINNERS = DISTANCES.filter(
    (car) => car.DISTANCE === MAX_DISTANCE
  ).map((car) => car.NAME);

  if (WINNERS.length === 1) {
    Console.print(`최종 우승자 : ${WINNERS[0]}`);
  } else {
    Console.print(
      `최종 우승자 : ${WINNERS.join(", ")}`
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

      Console.print("\n실행 결과\n");

      const RESULT_ARRAY = startRacing(
        CAR_ARRAY,
        RACING_COUNT
      );
      determineWinner(RESULT_ARRAY);
    } catch (error) {
      throw error;
    }
  }
}

export default App;
