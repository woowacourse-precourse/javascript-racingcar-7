import { Console } from '@woowacourse/mission-utils';

class Output {
  static printResult(winners) {
    const resultNames = winners.map((name) => name).join(', ');
    const outputMessage = `최종 우승자 : ${resultNames}`;
    Console.print(outputMessage);
  }
}
export default Output;
