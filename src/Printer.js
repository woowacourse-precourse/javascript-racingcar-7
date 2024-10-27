import { Console } from "@woowacourse/mission-utils";

class Printer {
    printResultText() {
        Console.print("\n실행 결과");
    }

    printLogs(logs) {
        Console.print(logs.join("\n"));
    }

    printWinner(winner) {
        Console.print(`최종 우승자 : ${winner.join(", ")}`);
    }
}

export default Printer;
