import { MissionUtils } from '@woowacourse/mission-utils';
import CarsInputValidator from '../utils/CarsInputValidator.js';

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

export { getCarsInput };