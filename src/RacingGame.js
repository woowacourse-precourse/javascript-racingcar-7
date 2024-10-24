import {Console} from "@woowacourse/mission-utils";
import {PROMPT_MESSAGE} from "./constants/message.js";

class RacingGame {
    async start(){
        const input = await this.input()
        this.sliceString(input)
    }

     async input() {
        return await Console.readLineAsync(PROMPT_MESSAGE.INPUT_CAR_NAME)
    }

    sliceString(param){
        return param.split(",")
    }



}

export default RacingGame