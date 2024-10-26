import { Console } from '@woowacourse/mission-utils';

class Display {
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
}

export default Display;
