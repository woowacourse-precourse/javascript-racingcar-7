import { Console } from "@woowacourse/mission-utils";

export function raceOutput(carList) {
  Object.entries(carList).forEach(([carName, value]) => {
    Console.print(`${carName} : ${"-".repeat(value)}`);
  });
}
