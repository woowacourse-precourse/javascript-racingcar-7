import { Console } from "@woowacourse/mission-utils";

export function printRacing(carNames, carDistances) {
  Console.print("실행 결과");
  const DASH = "-";

  carDistances.forEach((distance, i) => {
    Console.print(`${carNames[i]} : ${DASH.repeat(distance)}`);
  });
}
