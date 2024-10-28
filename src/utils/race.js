import { printRaceStatus } from "./console.js";

export function startRace(cars, tryCount) {
  for (let i = 0; i < tryCount; i++) {
    cars.forEach((car) => car.move());

    if (i === 0) {
      console.log("\n실행 결과");
    }

    printRaceStatus(cars);
  }
}
