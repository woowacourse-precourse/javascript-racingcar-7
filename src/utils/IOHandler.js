import { Console } from "@woowacourse/mission-utils";
import { PREFIX_ERROR_MESSAGE } from "./ErrorMessage.js";

class IOHandler {
    static async input(message) {
        try {
            const value = await Console.readLineAsync(message);
            return value;
        } catch (error) {
            throw new Error(`${PREFIX_ERROR_MESSAGE}  ${error}`);
        }
    }

    static output(message) {
        Console.print(message);
    }
}

export default IOHandler;