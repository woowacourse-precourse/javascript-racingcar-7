import {Console, MissionUtils} from "@woowacourse/mission-utils";
import {PROMPT_MESSAGE} from "./constants/message.js";
import {setWinnerCnt, sliceString} from "./preprocessingInputData.js";
import {Car} from "./Car.js";

//입력 -> 전처리 -> 레이싱 -> 우승자 산정 -> 출력
class RacingGame {
    tryNum = 0

    async start() {
        const car = new Car()
        const fistPrompt = await this.input(PROMPT_MESSAGE.FIRST)
        const carArr = car.setCar(fistPrompt)
        const secondPrompt = await this.input(PROMPT_MESSAGE.SECOND)
        this.tryNum = Number(secondPrompt)
        this.racing(carArr)
    }

    racing(carArr) {
        Console.print("실행결과")
        for (let i = 0; i < this.tryNum; i++) {
            for (const car of carArr) {
                const randomNum = this.setRandomNum()
                if (randomNum >= 4) {
                    car.winCnt++
                }
            }
            carArr.map((car) => Console.print(`${car.carName} : ${"-".repeat(car.winCnt)}`))
            Console.print("\n")
        }
        this.setWinner(carArr)
    }

    setWinner(cars) {
        const winnerArr = cars
            .sort((a, b) => b.winCnt - a.winCnt)
            .filter((elem) => elem.winCnt === cars[0].winCnt)
            .map((elem) => elem.carName)
        const winner = winnerArr.join(", ")
        Console.print(`최종 우승자 : ${winner}`)
    }

    setRandomNum() {
        return MissionUtils.Random.pickNumberInRange(0, 9);
    }

    async input(message) {
        return await Console.readLineAsync(message)
    }
}

export default RacingGame