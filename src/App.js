import { Console, Random } from "@woowacourse/mission-utils";

const getInput = async (inputMessage) => {
  try {
    return await Console.readLineAsync(inputMessage);
  } catch (error) {
    throw new Error("입력에 에러가 발생했습니다.");
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
    printRaceState(carState);
  }
};

const printRaceState = (carState) => {
  carState.forEach((car) => {
    Console.print(`${car.carName} : ${car.distance}`);
  });
  Console.print("");
};

const printWinners = (carState) => {
  const winnerDistance = Math.max(
    ...carState.map((car) => car.distance.length)
  );

  carState.forEach((car) => {
    if (car.distance.length === winnerDistance) {
      Console.print(`최종 우승자 : ${car.carName}`);
    }
  });
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

      Console.print("\n실행 결과");

      updateCarState(carState, movesNumber);

      printWinners(carState);
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
