import {Console, MissionUtils} from "@woowacourse/mission-utils";
import {OUTPUT_MESSAGE, PROMPT_MESSAGE} from "./constants/message.js";
import {Car} from "./Car.js";
import {getFirstPromptError, getSecondPromptError} from "./utils/errorMessageHandler.js";
import {inputHandler} from "./utils/inputHandler.js";

class RacingGame {
    promptSequence = 1 //이걸 명확하게? 스트링?
    carArr = [] // race 클래스 생성자로 만들고
    //코드를 갈자 걍 ㅋㅋ
    async handleRaceSequence(promptMessage) {
        const fistPrompt = await this.getInput(PROMPT_MESSAGE.FIRST)
        this.promptSequence++
        const secondPrompt = await this.getInput(PROMPT_MESSAGE.SECOND)

        /*if (this.promptSequence === 1) {
            this.carArr = new Car().setCar(prompt) //함수로?
            this.promptSequence++
            return this.handleRaceSequence(PROMPT_MESSAGE.SECOND)
        }
        if (this.promptSequence === 2) {
            this.playRace(Number(prompt))
            this.promptSequence++
        }
        const result = this.setWinner()
        this.getOutput(result)*/
    }

    //입력, 출력, 에러 처리 제외한 게임 로직을 클래스로 분리하자

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
        return inputHandler(input)
    }

    getOutput(data) { //최소 단위니까 이것도 나눠야?
        if (this.promptSequence === 2) {
            this.carArr.map((car) => Console.print(`${car.carName} : ${"-".repeat(car.winCnt)}`))
            return Console.print("\n")
        }
        if (this.promptSequence === 3) {
            return Console.print(OUTPUT_MESSAGE.WINNER + data)
        }
        this.handleError()
    }

    handleError() {
        throw new Error(OUTPUT_MESSAGE.ERROR.UNKNOWN)
    }

    /*    handleValid(string) {
            if (this.promptSequence === 1) {
                getFirstPromptError(string)
            }
            if (this.promptSequence === 2) {
                getSecondPromptError(string)
            }
        }*/
}

export default RacingGame