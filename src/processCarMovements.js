import { Console } from "@woowacourse/mission-utils";
import moveCarEachTurn from "./utils/moveCarEachTurn.js";
import showRaceState from "./utils/showRaceState.js";

const processCarMovements = async (cars, raceNum) => {
  Console.print("\n실행 결과\n");

  let carMovements = Array.from({ length: cars.length }, () => 0);

  for (let i = 0; i < raceNum; i++) {
    await moveCarEachTurn(cars, carMovements);
    showRaceState(cars, carMovements);
  }

  return carMovements;
};

export default processCarMovements;
