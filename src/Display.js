import { Console } from '@woowacourse/mission-utils';

class Display {
  static showRoundResult(roundResult) {
    const roundResultList = [...roundResult];
    roundResultList.forEach((carInformation) => {
      this.showDistanceGraph(carInformation);
    });

    this.showLineBreak();
  }

  static showRoundResultHeader(round) {
    const FIRST_ROUND = 1;
    const HEADER = '실행 결과';

    if (round === FIRST_ROUND) {
      Console.print(HEADER);
    }
  }

  static showDistanceGraph(roundResult) {
    const DISTANCE_MARK = '-';
    const { name, distance } = roundResult;
    const distanceGraph = DISTANCE_MARK.repeat(distance);

    Console.print(`${name} : ${distanceGraph}`);
  }

  static showWinners(winnerList) {
    const winnersNameToString = winnerList.join(', ');

    Console.print(`최종 우승자 : ${winnersNameToString}`);
  }

  static showLineBreak() {
    const BREAK_MARK = '';
    Console.print(BREAK_MARK);
  }
}

export default Display;
