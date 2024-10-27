import { MissionUtils } from '@woowacourse/mission-utils';

const InputParser = {

    async getCarNames() {
        try {
            const inputCarNames = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');

            if (!inputCarNames.trim()) {
                throw new Error('[ERROR] 자동차 이름이 입력되지 않았습니다.');
            }

            let carNames = inputCarNames.trim().split(',');
            for (let i = 0; i < carNames.length; i++) {
                if (carNames[i].length == 0 || carNames[i].length > 5) {
                    throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.')
                }
            }

            const uniqueNames = new Set(carNames);
            if (uniqueNames.size !== carNames.length) {
                throw new Error('[ERROR] 중복된 이름이 있습니다.');
            }

            return carNames
        } catch (error) {
            MissionUtils.Console.print(error.message);
            throw error;
        }
    },

    async getNumberOfRounds() {
        try {
            const inputNumberOfRounds = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
            const NumberOfRounds = Number(inputNumberOfRounds);

            //숫자가 아니거나, 자연수가 아닌 경우
            if (Number.isNaN(NumberOfRounds) || NumberOfRounds <= 0 || !Number.isInteger(numberOfRounds)) {
                throw new Error('[ERROR] 유효하지 않은 입력값입니다. 자연수를 입력해 주세요.');
            }

            return NumberOfRounds;
        } catch {
            MissionUtils.Console.print(error.message);
            throw error;
        }
    }
}

export default InputParser;