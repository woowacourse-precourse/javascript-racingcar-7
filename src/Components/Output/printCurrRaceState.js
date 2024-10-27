import { Console } from "@woowacourse/mission-utils";

/**
 *
 * @param {{ name: string, position: number }} raceCarList
 * @summary 현재 레이스 상태를 출력한다.
 */
const printCurrRaceState = (raceCarList) => {
  Console.print(
    raceCarList
      .map((car) => `${car.name} : ${"-".repeat(car.position)}`)
      .join("\n")
  );
  Console.print("\n");
};
export default printCurrRaceState;
