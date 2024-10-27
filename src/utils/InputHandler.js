import {Console} from '@woowacourse/mission-utils';
import ErrorCode from "../datas/ErrorCode.js";

class InputHandler {
    static async getInput(instruction, processInput = (x) => x) {
        const input = await Console.readLineAsync(instruction)
        if (input.length <= 0)
            throw new Error(ErrorCode.EMPTY_INPUT)
        return processInput(input)
    }
}

export default InputHandler

