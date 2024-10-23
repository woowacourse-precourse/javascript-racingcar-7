import { Console } from "@woowacourse/mission-utils";
import CarNamesValidator from '../utils/CarNamesValidator.js';

class InputHandler {
    constructor() {
        this.carNamesValidator = new CarNamesValidator();
    }

    async carNamesInput() {
        const input = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
        const carNames = this.processTrimInput(input);
        return carNames;
    }

    processTrimInput(input) {
        const carNames = input.split(',').map(name => name.trim());
        this.carNamesValidator.validateCarNames(carNames)
        return carNames;
    }
}

export default InputHandler;