import {Console} from "@woowacourse/mission-utils";
import {PROMPT_MESSAGE} from "./constants/message.js";

class RacingGame {
    async start(){
        const arr = []
        for (const message of PROMPT_MESSAGE) {
            const input = await this.input(message.input)
            if(message.key === 0){
                const carArray = this.sliceString(input)
                arr.push(carArray)
            }
            if(message.key === 1){
                arr.push(Number(input))
            }
        }
        this.racing(arr)
    }

    racing(){
        const randomNum = this.setRandomNum()

    }

    setRandomNum(){
        return Console.Random.pickNumberInRange(0,9)
    }




     async input(message) {
        return await Console.readLineAsync(message)
    }

    sliceString(param){
        return param.split(",")
    }



}

export default RacingGame