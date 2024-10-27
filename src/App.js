import { Console, Random } from "@woowacourse/mission-utils";
import { carNameHandleError, moveNumberHandleError } from "./handleError.js";
import { ADVANCE_THRESHOLD, ERROR_MESSAGES } from "./constants.js";

const getInput = async (inputMessage) => {
  try {
    return await Console.readLineAsync(inputMessage);
  } catch (error) {
    throw new Error(ERROR_MESSAGES.INPUT_ERROR);
  }
};

const createCarState = (carsName) => {
  const carState = carsName
    .split(",")
    .map((carName) => carName.trim())
    .filter((carName) => carName.length !== 0)
    .map((carName) => ({ carName, distance: "" }));

  return carState;
};

const updateCarState = (carState, noWhitespaceNumber) => {
  for (let i = 0; i < noWhitespaceNumber; i++) {
    carState.forEach((car) => {
      const advanceCondition = Random.pickNumberInRange(0, 9);
      if (advanceCondition >= ADVANCE_THRESHOLD) {
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

const multipleWinners = (carState, winnerDistance) => {
  const numberWinners = carState
    .filter((car) => car.distance.length === winnerDistance)
    .map((car) => car.carName).length;

  return numberWinners;
};

const countRacers = (carState) => {
  const numberRacers = carState.map((car) => car.carName).length;

  return numberRacers;
};

const printWinners = (carState) => {
  const winnerDistance = Math.max(
    ...carState.map((car) => car.distance.length)
  );

  const winners = carState
    .filter((car) => car.distance.length === winnerDistance)
    .map((car) => car.carName)
    .join(", ");

  const numberWinners = multipleWinners(carState, winnerDistance);
  const numberRacers = countRacers(carState);

  if (numberWinners === 1) {
    Console.print(`최종 우승자 : ${winners}`);
  } else if (numberWinners === numberRacers) {
    Console.print(`무승부 : ${winners}`);
  } else {
    Console.print(`공동 우승자 : ${winners}`);
  }
};

const removeWhitespace = (movesNumber) => {
  const noWhitespaceNumber = movesNumber.toString().replace(/\s/g, "");
  return noWhitespaceNumber;
};

class App {
  async run() {
    try {
      const carsName = await getInput(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );
      const carState = createCarState(carsName);
      carNameHandleError(carsName, countRacers(carState));

      const movesNumber = await getInput("시도할 횟수는 몇 회인가요?\n");
      const noWhitespaceNumber = removeWhitespace(movesNumber);
      moveNumberHandleError(noWhitespaceNumber);

      Console.print("\n실행 결과");
      updateCarState(carState, noWhitespaceNumber);
      printWinners(carState);
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
