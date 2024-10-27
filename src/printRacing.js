import { Console } from "@woowacourse/mission-utils";

export function printRacing(carCount, carNames, carDistances) {
  Console.print("실행 결과");
  const DASH = "-";

  for (let i = 0; i < carCount; i++) {
    Console.print(`${carNames[i]} : ${DASH.repeat(carDistances[i])}`);
  }
}
