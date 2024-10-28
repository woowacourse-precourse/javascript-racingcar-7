import { gameMessage } from "./constants.js";
import { Console } from "@woowacourse/mission-utils";

export default class AppController {
    async control() {
        const inputCarName = await Console.readLineAsync(gameMessage.inputCarNameMessage);
        const inputTime = await Console.readLineAsync(gameMessage.inputTimeMessage);

    }

}