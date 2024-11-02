import { Console } from "@woowacourse/mission-utils";

class OutView {

  showWinner(winners) {
    Console.print(`최종 우승자 : ${winners.join(',')}`);
  }


}

export default OutView