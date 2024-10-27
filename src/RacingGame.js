import {Console, MissionUtils} from "@woowacourse/mission-utils";
import {PROMPT_MESSAGE} from "./constants/message.js";

class RacingGame {
    async start() {
        const processObj = {cars:[],tryNum:0}
        for (const message of PROMPT_MESSAGE) {
            const input = await this.input(message.input)
            if (message.key === 0) {
                processObj.cars = this.setCars(input)
            }
            if (message.key === 1) {
                processObj.tryNum = Number(input)
            }
            console.log(processObj)
        }
        this.racing(processObj)
    }

    racing(processObj) {
        const {cars, tryNum} = processObj
        Console.print("실행결과")
        for (let i = 0; i < tryNum; i++) {
            for (const car of cars) {
                const randomNum = this.setRandomNum()
                if (randomNum >= 4) {
                    car.cnt++
                }
            }
            cars.map((car) => Console.print(`${car.carName} : ${"-".repeat(car.cnt)}`))
            Console.print("\n")
        }

        this.setWinner(cars)
    }

    setWinner(cars){
        const winnerArr = cars
            .sort((a,b)=> b.cnt-a.cnt)
            .filter((elem)=>elem.cnt === cars[0].cnt)
            .map((elem)=>elem.carName)
        const winner = winnerArr.join(", ")
        Console.print(`최종 우승자 : ${winner}`)
    }

    setRandomNum() {
        return MissionUtils.Random.pickNumberInRange(0, 9);
    }

    setCars(arr) {
        const carArr = this.sliceString(arr)
        return this.setWinnerCnt(arr, carArr)
    }

    sliceString(param) {
        return param.split(",")
    }

    setWinnerCnt(arr, carArr) {
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