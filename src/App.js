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
    .map((carName) => carName.trim())
    .filter((carName) => carName.length !== 0)
    .map((carName) => ({ carName, distance: "" }));

  if (countRacers(carState) > 25)
    throw new Error("자동차가 너무 많습니다. 25대까지 참여 가능합니다.");

  return carState;
};

const updateCarState = (carState, noWhitespaceNumber) => {
  for (let i = 0; i < noWhitespaceNumber; i++) {
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
      const carNameLengthLimit = carsName
        .split(",")
        .every((carName) => carName.trim().length <= 5);

      if (!carNameLengthLimit)
        throw new Error("자동차 이름은 5자 이하만 가능합니다.");

      if (carsName.trim().length === 0)
        throw new Error("자동차 이름을 한 대 이상 입력해주세요.");

      const carState = createCarState(carsName);

      const movesNumber = await getInput("시도할 횟수는 몇 회인가요?\n");
      const noWhitespaceNumber = removeWhitespace(movesNumber);

      if (isNaN(noWhitespaceNumber))
        throw new Error("시도할 횟수는 숫자만 입력이 가능합니다.");

      if (
        !Number.isInteger(Number(noWhitespaceNumber)) ||
        noWhitespaceNumber < 0
      )
        throw new Error("시도할 횟수는 양의 정수만 입력이 가능합니다.");

      if (noWhitespaceNumber > Number.MAX_SAFE_INTEGER)
        throw new Error("시도할 횟수가 너무 큽니다.");

      if (noWhitespaceNumber.trim().length === 0)
        throw new Error("시도할 횟수를 입력해주세요.");

      Console.print("\n실행 결과");

      updateCarState(carState, noWhitespaceNumber);

      printWinners(carState);
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
