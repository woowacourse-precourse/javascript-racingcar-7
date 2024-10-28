import { MissionUtils } from '@woowacourse/mission-utils';
import CarsInputValidator from '../utils/CarsInputValidator.js';
import moveCountInputValidator from '../utils/MoveCountInputValidation.js';

// 자동차 입력
const getCarsInput = async () => {
    const inputMessage = "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)";
    try {
        const input = await MissionUtils.Console.readLineAsync(inputMessage);
        
        CarsInputValidator(input);

        return input.split(",");
    } catch (err) {
        throw err;
    }
}

// 이동 횟수 입력
const getMoveCountInput = async () => {
    const inputMessage = "시도할 횟수는 몇 회인가요?";

    try {
        const input = await MissionUtils.Console.readLineAsync(inputMessage);

        moveCountInputValidator(input);

        return +input;
    } catch (err) {
        throw err;
    }
}

// 출력
const printOutput = (output) => {
    MissionUtils.Console.print(output);
}
export { getCarsInput, getMoveCountInput, printOutput };