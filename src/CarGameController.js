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
        this.#inputHandler = new InputHandler();
        this.#validator = new Validator();
        this.#printer = new Printer();
    }

    async play() {
        const inputCarNames = await this.#inputHandler.enterCarNames();
        const splittedCarNames = Utils.transformCarNamesStringToArray(inputCarNames);
        this.#validator.isValidCarName(splittedCarNames);

        const inputTryCnt = await this.#inputHandler.enterTryCount();
        this.#validator.isValidTryCount(inputTryCnt);

        const carGame = new CarGame(splittedCarNames, inputTryCnt);
        const resultLogs = carGame.startRace();
        const winner = carGame.pickWinner();

        this.#printer.printResultText();
        this.#printer.printLogs(resultLogs);
        this.#printer.printWinner(winner);
    }
}

export default CarGameController;
