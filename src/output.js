import { Console } from "@woowacourse/mission-utils";

function displayResult(winners) {
  winners = winners.join(", ");
  Console.print(`최종 우승자 : ${winners}`);
}

export default displayResult;
