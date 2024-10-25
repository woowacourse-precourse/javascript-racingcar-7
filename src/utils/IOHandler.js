import { Console } from "@woowacourse/mission-utils";
import { getErrorMessage } from "./ErrorMessageMaker.js";

class IOHandler {
    static async input(message) {
        try {
            const value = await Console.readLineAsync(message);
            return value;
        } catch (error) {
            throw new Error(getErrorMessage(`${error.message}`));
        }
    }

    static output(message) {
        Console.print(message);
    }
}

export default IOHandler;