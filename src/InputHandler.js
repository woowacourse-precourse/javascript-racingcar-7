import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "./constants/Message.js";

class InputHandler {
    async enterCarNames() {
        return await Console.readLineAsync(INPUT_MESSAGE.CAR_NAMES_PROMPT);
    }

    async enterTryCount() {
        return await Console.readLineAsync(INPUT_MESSAGE.TRY_COUNT_PROMPT);
    }
}

export default InputHandler;
