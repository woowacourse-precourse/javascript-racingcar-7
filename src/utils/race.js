import { printRaceStatus } from "./console.js";
import { Console } from "@woowacourse/mission-utils";

export function startRace(cars, tryCount) {
  for (let i = 0; i < tryCount; i++) {
    cars.forEach((car) => car.move());

    if (i === 0) {
      Console.print("\n실행 결과");
    }

    printRaceStatus(cars);
  }
}
