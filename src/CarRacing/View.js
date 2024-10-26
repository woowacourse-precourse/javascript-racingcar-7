import { Console } from '@woowacourse/mission-utils';

class View {
  async readInput(inputMessage) {
    const rawInput = await Console.readLineAsync(`${inputMessage}\n`);
    return rawInput;
  }

  printRaceResult(winnerNames, history) {
    Console.print('\n실행 결과');
    Console.print(`${history} \n`);
    Console.print(`최종 우승자 : ${winnerNames}`);
  }
}

export default View;
