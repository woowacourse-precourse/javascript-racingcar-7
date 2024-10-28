import { Console } from "@woowacourse/mission-utils";
import Validator from "../utils/Validator.js";

class InputView {
    async readCarNames() {
        const input = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
        const names = input.split(',').map(name => name.trim());
        Validator.validateCarNames(names);
        return names;
    }

    async readAttempts() {
        const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
        Validator.validateAttempts(input);
        return Number(input);
    }
}

export default InputView;