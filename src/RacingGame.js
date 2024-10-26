import {Console, MissionUtils} from "@woowacourse/mission-utils";
import {PROMPT_MESSAGE} from "./constants/message.js";

class RacingGame {
    async start() {
        const arr = []
        for (const message of PROMPT_MESSAGE) {
            const input = await this.input(message.input)
            if (message.key === 0) {
                const carArray = this.setCars(input)
                arr.push(carArray)
            }
            if (message.key === 1) {
                arr.push(Number(input))
            }
        }
        this.racing(arr)
    }

    racing(arr) {
        const [carArr, tryCnt] = arr
        const resultArr = []
        for (let i = 0; i < tryCnt; i++) {
            for (const car of carArr) {
                const randomNum = this.setRandomNum()
                if (randomNum >= 4) {
                    car.cnt++
                }
            }
            carArr.map((elem) => Console.print(`${elem.carName} : ${elem.cnt}`))
            Console.print("\n")
        }
        console.log(resultArr)
    }

    setRandomNum() {
        return MissionUtils.Random.pickNumberInRange(0, 9);
    }

    setCars(arr) {
        const carArr = this.sliceString(arr)
        return this.setWinCnt(arr, carArr)
    }

    sliceString(param) {
        return param.split(",")
    }

    setWinCnt(arr, carArr) {
        return carArr.map((elem) => {
                return {cnt: 0, carName: elem}
            }
        )
    }

    async input(message) {
        return await Console.readLineAsync(message)
    }

}

export default RacingGame