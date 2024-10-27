import { Console } from "@woowacourse/mission-utils";

class InputHandler {
    async getInput(message) {
        return await Console.readLineAsync(message);
    }
}

export default InputHandler;