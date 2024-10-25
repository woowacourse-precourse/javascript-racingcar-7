import { Console } from "@woowacourse/mission-utils"

const displayWinners = (winners) => {
  if (winners.length === 1) {
    Console.print(`최종 우승자 : ${winners[0]}`);
  }
  if (winners.length !== 1) {
    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}

export default displayWinners;