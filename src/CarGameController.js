import CarGame from "./CarGame.js";
import InputHandler from "./InputHandler.js";
import Printer from "./Printer.js";
import Utils from "./Utils.js";
import Validator from "./Validator.js";

// 자동차 경주 게임 진행 클래스
class CarGameController {
    inputHandler; // 입력 처리 객체
    validator; // 예외 처리 객체
    printer; // 출력 처리 객체

    constructor() {
        this.inputHandler = new InputHandler();
        this.validator = new Validator();
        this.printer = new Printer();
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

        this.printer.printResultText();
        this.printer.printLogs(resultLogs);
        this.printer.printWinner(winner);
    }
}

export default CarGameController;
