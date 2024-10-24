import { Console } from "@woowacourse/mission-utils";

class OutputHandler {
    printError(error) {
        Console.print(error.message);
    }
    printWinners(winners) {
        Console.print(`최종 우승자 : ${winners}`);
    }
}

export default OutputHandler;