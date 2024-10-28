import {Console} from "@woowacourse/mission-utils";
import {OUTPUT_MESSAGE, PROMPT_MESSAGE} from "./constants/message.js";
import {Car} from "./Car.js";
import {inputHandler} from "./utils/inputHandler.js";
import {setWinner, winCounter} from "./utils/raceHandler.js";

class RacingGame {
    promptSequence = 1
    carArr = []

    async handleRaceSequence() {
        const fistPrompt = await this.getInput(PROMPT_MESSAGE.FIRST)
        this.promptSequence++
        this.createCarList(fistPrompt)
        const secondPrompt = await this.getInput(PROMPT_MESSAGE.SECOND)
        this.displayResult(secondPrompt)
    }

    createCarList(prompt) {
        this.carArr = new Car().setCar(prompt)
    }

    displayResult(tryNum) {
        Console.print(OUTPUT_MESSAGE.RESULT)
        const winner = this.playRace(tryNum)
        this.promptSequence++
        this.getOutput(winner)
    }

    playRace(tryNum) {
        for (let i = 0; i < tryNum; i++) {
            winCounter(this.carArr)
            this.getOutput(this.carArr)
        }
        return setWinner(this.carArr)
    }

    async getInput(message) {
        const input = await Console.readLineAsync(message)
        return inputHandler(input)
    }

    getOutput(data) {
        if (this.promptSequence === 2) {
            return data.map((data) => Console.print(`${data.carName} : ${"-".repeat(data.winCnt)}`)) && Console.print("\n")
        }
        if (this.promptSequence === 3) {
            return Console.print(OUTPUT_MESSAGE.WINNER + data)
        }
        return this.handleError()
    }

    handleError() {
        throw new Error(OUTPUT_MESSAGE.ERROR.UNKNOWN)
    }

}

export default RacingGame