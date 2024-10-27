import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "./constants/Message.js";

class InputHandler {
    async enterCarNames() {
        const inputCarNames = await Console.readLineAsync(INPUT_MESSAGE.CAR_NAMES_PROMPT);

        return inputCarNames;
    }

    async enterTryCount() {
        const inputTryCnt = await Console.readLineAsync(INPUT_MESSAGE.TRY_COUNT_PROMPT);
        return inputTryCnt;
    }
}

export default InputHandler;
