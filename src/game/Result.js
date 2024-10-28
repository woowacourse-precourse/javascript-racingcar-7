import { Console } from "@woowacourse/mission-utils";

export function displayRoundResult(carPositions) {
  Console.print("\n실행 결과");
  Object.entries(carPositions).forEach(([car, position]) => {
    Console.print(`${car} : ${"-".repeat(position)}`);
  });
}