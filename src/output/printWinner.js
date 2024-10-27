import { Console } from "@woowacourse/mission-utils";

export const printWinner = (racingCars, winnerIndex) => {
  if (winnerIndex.length === 0) {
    return Console.print("우승자가 없습니다. 다시 시도해주세요.");
  }

  const winnerNames = [];
  winnerIndex.map(index => {
    winnerNames.push(racingCars[index]);
  });

  const winnerNameString = winnerNames.join(", ");
  Console.print(`최종 우승자: ${winnerNameString}`);
};
