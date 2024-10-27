import { Console } from "@woowacourse/mission-utils";

export const printWinner = (racingCars, winnerIndex) => {
  const winnerNames = [];
  winnerIndex.map(index => {
    winnerNames.push(racingCars[index]);
  });

  const winnerNameString = winnerNames.join(", ");
  Console.print(`최종 우승자: ${winnerNameString}`);
};
