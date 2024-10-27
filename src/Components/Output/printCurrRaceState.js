import { Console } from "@woowacourse/mission-utils";

const printCurrRaceState = (raceCarList) => {
  Console.print(
    raceCarList
      .map((car) => `${car.name} : ${"-".repeat(car.position)}`)
      .join("\n")
  );
  Console.print("\n");
};
export default printCurrRaceState;
