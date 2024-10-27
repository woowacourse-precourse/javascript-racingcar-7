import {Console, MissionUtils} from "@woowacourse/mission-utils";
import {OUTPUT_MESSAGE, PROMPT_MESSAGE} from "./constants/message.js";
import {Car} from "./Car.js";
import {firstErrorCondition, secondErrorCondition} from "./utils/condition.js";

class RacingGame {
    promptSequence = 1
    carArr = []

    async handleRaceSequence(promptMessage) {
        const prompt = await this.getInput(promptMessage)
        if (this.promptSequence === 1) {
            this.carArr = new Car().setCar(prompt)
            this.promptSequence++
            return this.handleRaceSequence(PROMPT_MESSAGE.SECOND)
        }
        if (this.promptSequence === 2) {
            const tryNum = Number(prompt)
            this.getOutput(result)
            this.playRace(tryNum)
            this.promptSequence++
        }
        const result = this.setWinner()
        this.getOutput(result)
    }

    playRace(tryNum) {
        // this.output("실행결과")
        for (let i = 0; i < tryNum; i++) {
            this.winCounter(this.carArr)
            this.getOutput()
        }
    }

    winCounter(carArr) {
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

    async getInput(message) {
        const input = await Console.readLineAsync(message)
        this.errorhandler(input)
        return input
    }

    getOutput(data) {
        if (this.promptSequence === 2) {
            this.carArr.map((car) => Console.print(`${car.carName} : ${"-".repeat(car.winCnt)}`))
            Console.print("\n")
        }
        if (this.promptSequence === 3) {
            Console.print(OUTPUT_MESSAGE.ERROR+data)
        }
    }

    errorhandler(string) {
        if (this.promptSequence === 1 && firstErrorCondition(string)) {
            throw new Error(OUTPUT_MESSAGE.ERROR)
        }
        if (this.promptSequence === 2 && secondErrorCondition(string)) {
            throw new Error(OUTPUT_MESSAGE.ERROR)
        }
    }
}

export default RacingGame