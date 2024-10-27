import { Console } from '@woowacourse/mission-utils';

class OutputHandler {
  printErrorMessage(errorMessage) {
    Console.print(errorMessage);
  }

  printResultMessage() {
    Console.print('\n실행 결과');
  }

  printOneRoundResult(roundResult) {
    roundResult.forEach(car => {
      const dashes = '-'.repeat(car.moveCount);
      Console.print(`${car.name} : ${dashes}`);
    })
    Console.print('');
  }

  printFinalWinners(winners) {
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default OutputHandler;
