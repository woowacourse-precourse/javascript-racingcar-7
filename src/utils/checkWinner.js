import { Console } from "@woowacourse/mission-utils";

export function checkWinner(cars, result) {
  const maxResult = Math.max(...result);
  const winners = cars.filter((car, index) => result[index] === maxResult);
  Console.print(`최종 우승자 : ${winners.join(", ")}`);
}
