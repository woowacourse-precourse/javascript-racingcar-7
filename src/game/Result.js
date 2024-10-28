import { Console } from "@woowacourse/mission-utils";

export function displayRoundResult(carPositions) {
  Console.print("\n실행 결과");
  Object.entries(carPositions).forEach(([car, position]) => {
    Console.print(`${car} : ${"-".repeat(position)}`);
  });
}

export function displayWinners(carPositions) {
  const maxPosition = Math.max(...Object.values(carPositions));
  const winners = Object.keys(carPositions).filter(car => carPositions[car] === maxPosition);
  Console.print(`\n최종 우승자 : ${winners.join(", ")}`);
}