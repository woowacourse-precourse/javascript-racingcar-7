import {Console, MissionUtils} from "@woowacourse/mission-utils";
import {PROMPT_MESSAGE} from "./constants/message.js";
import {Car} from "./Car.js";

//입력 -> 전처리 -> 레이싱 -> 우승자 산정 -> 출력
class RacingGame {
    promptSequence = 1
    carArr = []

    async start(promptMessage) {
        const prompt = await this.input(promptMessage)
        if (this.promptSequence === 1) {
            this.carArr = new Car().setCar(prompt)
            this.promptSequence++
            return this.start(PROMPT_MESSAGE.SECOND)
        }
        if (this.promptSequence === 2) {
            const tryNum = Number(prompt)
            this.totalRace(tryNum)
            this.promptSequence++
        }
        const result = this.setWinner()
        this.output(result)
    }

    totalRace(tryNum) {
        // this.output("실행결과")
        for (let i = 0; i < tryNum; i++) {
            this.individualRace(this.carArr)
            this.output()
        }
    }

    individualRace(carArr) {
        for (const car of carArr) {
            const randomNum = this.setRandomNum()
            if (randomNum >= 4) {
                car.winCnt++
            }
        }
    }

    setWinner() {
        return this.carArr
            .sort((a, b) => b.winCnt - a.winCnt)
            .filter((elem) => elem.winCnt === this.carArr[0].winCnt)
            .map((elem) => elem.carName)
            .join(", ")
    }

    setRandomNum() {
        return MissionUtils.Random.pickNumberInRange(0, 9);
    }

    async input(message) {
        const input = await Console.readLineAsync(message)
        this.isError(input)
        return input
    }

    output(data) {
        if (this.promptSequence === 2) {
            this.carArr.map((car) => Console.print(`${car.carName} : ${"-".repeat(car.winCnt)}`))
            Console.print("\n")
        }
        if (this.promptSequence === 3) {
            Console.print(`최종 우승자 : ${data}`)
        }
    }

    isError(string) {
        const firstErrorCondition = string.includes(" ") || string.length > 5
        const secondErrorCondition = string.includes(" ") || isNaN(string)
        if (this.promptSequence === 1 && firstErrorCondition) {
            throw new Error("[ERROR]: 잘못된 값을 입력 하셨습니다.")
        }
        if (this.promptSequence === 2 && secondErrorCondition) {
            throw new Error("[ERROR]: 잘못된 값을 입력 하셨습니다.")
        }
    }
}

export default RacingGame