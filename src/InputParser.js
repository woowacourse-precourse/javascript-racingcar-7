import { MissionUtils } from '@woowacourse/mission-utils';
import { isValidateCarNames, isValidateRounds } from './validate.js'

class InputParser {

    static async getCarNames() {
        try {
            const inputCarNames = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');

            if (!inputCarNames.trim()) {
                throw new Error('[ERROR] 자동차 이름이 입력되지 않았습니다.');
            }

            const carNames = inputCarNames.trim().split(',');

            if (isValidateCarNames(carNames)) {
                return carNames;
            }

        } catch (error) {
            throw error;
        }
    }

    static async getNumberOfRounds() {
        try {
            const inputNumberOfRounds = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
            const numberOfRounds = Number(inputNumberOfRounds);

            if (isValidateRounds(numberOfRounds)) {
                MissionUtils.Console.print('\n');
                return numberOfRounds;
            }

        } catch (error) {
            throw error;
        }
    }
}

export default InputParser;