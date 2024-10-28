import { Console } from "@woowacourse/mission-utils";

export function printRacing(carNames, carDistances) {
  Console.print("실행 결과");
  const DASH = "-";

  for (let i = 0; i < carDistances.length; i++) {
    Console.print(`${carNames[i]} : ${DASH.repeat(carDistances[i])}`);
  }
}
