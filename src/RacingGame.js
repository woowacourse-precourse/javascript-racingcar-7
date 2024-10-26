import {Console} from "@woowacourse/mission-utils";
import {PROMPT_MESSAGE} from "./constants/message.js";

class RacingGame {
    async start(){
        for (const message of PROMPT_MESSAGE) {
            const input = await this.input(message)
            this.sliceString(input)
        }
    }

     async input(message) {
        return await Console.readLineAsync(message)
    }

    sliceString(param){
        return param.split(",")
    }



}

export default RacingGame