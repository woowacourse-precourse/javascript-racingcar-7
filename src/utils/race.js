import { printRaceStatus } from "./console.js";
import { Console } from "@woowacourse/mission-utils";

export function startRace(cars, tryCount) {
  for (let i = 0; i < tryCount; i++) {
    cars.forEach((car) => car.move());
    printRaceStatus(cars); // 현재 레이스 상태 출력
  }
}
