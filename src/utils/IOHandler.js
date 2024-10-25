import {Console} from '@woowacourse/mission-utils';

class IOHandler {
    static async getInput(instruction, processInput = (x) => x) {
        const input = await Console.readLineAsync(instruction)
        return processInput(input)
    }
}


export default IOHandler

