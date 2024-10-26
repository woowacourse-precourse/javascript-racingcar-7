import { Console, Random } from "@woowacourse/mission-utils";

const getInput = async (inputMessage) => {
  try {
    return await Console.readLineAsync(inputMessage);
  } catch (error) {
    throw error;
  }
};

const createCarState = (carsName) => {
  const carState = carsName
    .split(",")
    .map((carName) => ({ carName, distance: "" }));
  return carState;
};

const updateCarState = (carState, movesNumber) => {
  for (let i = 0; i < movesNumber; i++) {
    carState.forEach((car) => {
      const advanceCondition = Random.pickNumberInRange(0, 9);
      if (advanceCondition >= 4) {
        car.distance += "-";
      }
    });
  }
};

class App {
  async run() {
    try {
      const carsName = await getInput(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );
      const carNameLengthLimit = carsName
        .split(",")
        .every((carName) => carName.length <= 5);
      if (!carNameLengthLimit)
        throw new Error("자동차 이름은 5자 이하만 가능합니다.");

      const movesNumber = await getInput("시도할 횟수는 몇 회인가요?\n");

      const carState = createCarState(carsName);

      updateCarState(carState, movesNumber);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
