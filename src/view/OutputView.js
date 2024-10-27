import { Console } from "@woowacourse/mission-utils";
import { OUTPUT } from "../constants/outputConstants.js";

export class OutputView {
  printResultStart() {
    Console.print(OUTPUT.RESULT);
  }

  printMoveCounts(roundResult) {
    roundResult.forEach((result) => {
      Console.print(result);
    });
    this.printNewLine();
  }

  printNewLine() {
    Console.print("");
  }

  printWinner(winner) {
    Console.print(`${OUTPUT.WINNER}${winner.join(", ")}\n`);
  }
}
