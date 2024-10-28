import CarGame from "./CarGame.js";
import InputHandler from "./InputHandler.js";
import Printer from "./Printer.js";
import Utils from "./Utils.js";
import Validator from "./Validator.js";

class CarGameController {
    #inputHandler;
    #validator;
    #printer;

    constructor() {
        this.#initDepenency();
    }

    #initDepenency() {
        this.#inputHandler = new InputHandler();
        this.#validator = new Validator();
        this.#printer = new Printer();
    }

    async play() {
        const carNames = await this.#inputCarNames();
        const tryCount = await this.#inputTryCount();

        const carGame = new CarGame(carNames, tryCount);

        const resultLogs = carGame.startRace();
        const winner = carGame.pickWinner();

        this.#printResult(resultLogs, winner);
    }

    async #inputCarNames() {
        const inputCarNames = await this.#inputHandler.enterCarNames();
        const convertedCarNames = Utils.convertCarNames(inputCarNames);
        this.#validator.checkCarName(convertedCarNames);
        return convertedCarNames;
    }

    async #inputTryCount() {
        const inputTryCnt = await this.#inputHandler.enterTryCount();
        const convertedTryCount = Utils.convertTryCount(inputTryCnt);
        this.#validator.checkTryCount(convertedTryCount);
        return convertedTryCount;
    }

    #printResult(resultLogs, winner) {
        this.#printer.printResultText();
        this.#printer.printLogs(resultLogs);
        this.#printer.printWinner(winner);
    }
}

export default CarGameController;
