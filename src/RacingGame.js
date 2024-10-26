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
        Console.print("실행결과")
        for (let i = 0; i < tryCnt; i++) {
            for (const car of carArr) {
                const randomNum = this.setRandomNum()
                if (randomNum >= 4) {
                    car.cnt++
                }
            }
            carArr.map((elem) => Console.print(`${elem.carName} : ${"-".repeat(elem.cnt)}`))
            Console.print("\n")
        }

        this.setWinner(carArr)
    }

    setWinner(arr){
        const winnerArr = arr
            .sort((a,b)=> b.cnt-a.cnt)
            .filter((elem)=>elem.cnt === arr[0].cnt)
            .map((elem)=>elem.carName)
        const winner = winnerArr.join(", ")
        Console.print(`최종 우승자 : ${winner}`)
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