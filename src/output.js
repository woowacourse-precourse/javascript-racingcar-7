import { Console } from "@woowacourse/mission-utils";

export function raceOutput(carList) {
  Object.entries(carList).forEach(([carName, value]) => {
    Console.print(`${carName} : ${"-".repeat(value)}`);
  });
}

export function raceWinnerOutput(winnerList) {
  const winners = winnerList.join(", ");
  Console.print(`최종 우승자 : ${winners}`);
}
