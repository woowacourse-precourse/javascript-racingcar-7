import { Console } from "@woowacourse/mission-utils";

class OutputHandler {
    printError(error) {
        Console.print(error.message);
    }
}

export default OutputHandler;