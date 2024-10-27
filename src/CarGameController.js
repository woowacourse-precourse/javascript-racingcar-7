import { Console, Random } from "@woowacourse/mission-utils";
import InputHandler from "./InputHandler.js";
import Utils from "./Utils.js";
import Validator from "./Validator.js";

// 자동차 경주 게임 진행 클래스
class CarGameController {
    inputHandler; // 입력 처리 객체
    validator; // 예외 처리 객체

    constructor() {
        this.inputHandler = new InputHandler();
        this.validator = new Validator();
    }

    async play() {
        const inputCarNames = await this.inputHandler.enterCarNames();
        const splittedCarNames = Utils.transformStringCarNamesToArray(inputCarNames);
        this.validator.isValidCarName(splittedCarNames);

        const inputTryCnt = await this.inputHandler.enterTryCount();
        this.validator.isValidTryCount(inputTryCnt);

        const carCount = splittedCarNames.length;
        const runCntArr = Array.from({ length: carCount }, () => Array(+inputTryCnt).fill(0));

        let tryCnt = 0;
        while (tryCnt < Number(inputTryCnt)) {
            for (let i = 0; i < carCount; i++) {
                const randomNumber = Random.pickNumberInRange(0, 9);
                if (randomNumber >= 4) {
                    runCntArr[i][tryCnt] = 1;
                }
            }

            tryCnt++;
        }

        for (let i = 0; i < carCount; i++) {
            for (let j = 1; j < +inputTryCnt; j++) {
                runCntArr[i][j] += runCntArr[i][j - 1];
            }
        }

        const result = [];

        for (let i = 0; i < +inputTryCnt; i++) {
            for (let j = 0; j < carCount; j++) {
                result.push(`${splittedCarNames[j]} : ${"-".repeat(runCntArr[j][i])}`);
            }
            result.push("");
        }

        Console.print("\n실행 결과");
        Console.print(result.join("\n"));

        let winner = [];
        let maxCnt = -1;
        for (let i = 0; i < carCount; i++) {
            const finalCnt = runCntArr[i][+inputTryCnt - 1];
            if (maxCnt < finalCnt) {
                maxCnt = finalCnt;
                winner = [splittedCarNames[i]];
            } else if (maxCnt === finalCnt) {
                winner.push(splittedCarNames[i]);
            }
        }

        Console.print(`최종 우승자 : ${winner.join(", ")}`);
    }
}

export default CarGameController;
