import { Console } from "@woowacourse/mission-utils";
import CarNamesValidator from '../utils/CarNamesValidator.js';
import CountNumValidator from "../utils/CountNumValidator.js";

class InputHandler {
    constructor() {
        this.carNamesValidator = new CarNamesValidator();
        this.countNumValidator = new CountNumValidator();
    }

    async getCarNamesAndCountNum() {
        const carNames = await this.carNamesInput();
        const countNum = await this.countNumInput();
        return { carNames, countNum };
    }

    async carNamesInput() {
        const input = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
        const carNames = this.processTrimInput(input);
        return carNames;
    }

    async countNumInput() {
        const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
        this.countNumValidator.validateCountNum(input);
        return input;
    }

    processTrimInput(input) {
        const carNames = input.split(',').map(name => name.trim());
        this.carNamesValidator.validateCarNames(carNames); // 자르고 유효성 검사
        return carNames;
    }

    processCountNumInput(input) {
        this.countNumValidator.validateCountNum(input);
        return input;
    }
}

export default InputHandler;