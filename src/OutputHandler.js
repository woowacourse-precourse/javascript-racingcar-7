import { Console } from "@woowacourse/mission-utils";

class OutputHandler {
  printErrorMessage(errorMessage) {
    Console.print(errorMessage);
  }

  printResultMessage() {
    Console.print('\n실행 결과');
  }

  printOneRoundResult(roundResult) {
    roundResult.forEach(car => {
      const dashCounts = '-'.repeat(car.moveCount);
      Console.print(`${car.name} : ${dashCounts}`);
    })
    Console.print('');
  }
}

export default OutputHandler;
