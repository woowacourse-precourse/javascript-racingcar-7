import { Console } from "@woowacourse/mission-utils";
import { PRINT_MESSAGE } from "./constants/Message.js";

class Printer {
    printResultText() {
        Console.print(PRINT_MESSAGE.RESULT_TEXT);
    }

    printLogs(logs) {
        Console.print(PRINT_MESSAGE.TOTAL_LOGS(logs));
    }

    printWinner(winner) {
        Console.print(PRINT_MESSAGE.FINAL_WINNER(winner));
    }
}

export default Printer;
