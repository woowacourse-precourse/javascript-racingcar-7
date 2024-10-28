import { Console } from '@woowacourse/mission-utils';
import {
    separateCarNames,
    initializeMove,
    runAllTrials,
    displayWinners,
} from './racingCar.js';

import {
    validateNameLength,
    isCarNameEmpty,
    hasDuplicateNames,
    isTrialCountZero,
    validateTrial,
} from './handleError.js';

class App {
    async run() {
        const RACING_CARS = await Console.readLineAsync(
            '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
        );
        const CAR_NAMES = separateCarNames(RACING_CARS);

        validateNameLength(CAR_NAMES);
        isCarNameEmpty(CAR_NAMES);
        hasDuplicateNames(CAR_NAMES);

        const TRIAL_NUMBER = await Console.readLineAsync(
            '시도할 횟수는 몇 회인가요?\n'
        );

        isTrialCountZero(TRIAL_NUMBER);
        validateTrial(Number(TRIAL_NUMBER));

        const MOVE_RESULTS = initializeMove(CAR_NAMES);

        Console.print('\n실행 결과');
        const FINAL_RESULT = runAllTrials(
            TRIAL_NUMBER,
            CAR_NAMES,
            MOVE_RESULTS
        );
        displayWinners(CAR_NAMES, FINAL_RESULT);
    }
}

export default App;
