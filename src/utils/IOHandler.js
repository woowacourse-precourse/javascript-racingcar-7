import { Console } from "@woowacourse/mission-utils";

class IOHandler {
    static async input(message) {
        try {
            const value = await Console.readLineAsync(message);
            return value;
        } catch (error) {
            throw new Error(`[ERROR] ${error.message}`);
        }
    }

    static output(message) {
        Console.print(message);
    }
}

export default IOHandler;