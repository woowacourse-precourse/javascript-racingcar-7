import {Console} from "@woowacourse/mission-utils";
import {PROMPT_MESSAGE} from "./constants/message.js";

class RacingGame {
    async start(){
        const arr = []
        for (const message of PROMPT_MESSAGE) {
            const input = await this.input(message.input)
            if(message.key === 0){
                const carArray = this.setCars(input)
                arr.push(carArray)
            }
            if(message.key === 1){
                arr.push(Number(input))
            }
        }
        console.log(arr)
        this.racing(arr)
    }

    racing(arr){
        const cars = arr[0]
        for (const car of cars) {

        }
        const randomNum = this.setRandomNum()

    }

    setRandomNum(){
        return Console.Random.pickNumberInRange(0,9)
    }

    setCars(arr){
        const carArr = this.sliceString(arr)
        return this.setWinCnt(arr, carArr)
    }
    sliceString(param){
        return param.split(",")
    }

    setWinCnt(arr,carArr){
        return carArr.map((elem) =>
            {return {cnt: 0,carName:elem}}
        )
    }

     async input(message) {
        return await Console.readLineAsync(message)
    }

}

export default RacingGame