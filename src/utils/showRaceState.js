import { Console } from "@woowacourse/mission-utils";

const RACE_PROGRESS_BAR_SYMBOL = "-";

const showRaceState = (cars, carMovements) => {
  const raceState = cars.map((car, index) => {
    const progressBar = RACE_PROGRESS_BAR_SYMBOL.repeat(carMovements[index]);
    return `${car} : ${progressBar}`;
  });

  Console.print(raceState.join("\n") + "\n");
};

export default showRaceState;
