import { Console } from "@woowacourse/mission-utils";
import { validateCarNames, validateTryNumber } from "../utils/validators.js";

class InputView {
    async getInput() {
        const carNames = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
        const car = carNames.split(',');
        validateCarNames(car);

        const tryNumber = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
        validateTryNumber(tryNumber);
        Console.print('\n');

        return { car, tryNumber: parseInt(tryNumber, 10) };
    }
}

export default InputView;
