import { Console } from "@woowacourse/mission-utils";
import CarGame from "./CarGame.js";
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

        const carGame = new CarGame(splittedCarNames, inputTryCnt);
        const resultLogs = carGame.startRace();
        const winner = carGame.pickWinner();

        Console.print("\n실행 결과");
        Console.print(resultLogs.join("\n"));
        Console.print(`최종 우승자 : ${winner.join(", ")}`);
    }
}

export default CarGameController;
