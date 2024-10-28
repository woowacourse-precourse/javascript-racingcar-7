import { MissionUtils } from '@woowacourse/mission-utils';
import { Console } from '@woowacourse/mission-utils';

export function separateCarNames(carNames) {
    return carNames.split(',').map((carName) => carName.trim());
}

export function initializeMove(carNames) {
    return Array(carNames.length).fill(0);
}

function oneCarMove(moveResult) {
    const CHALLENGE = MissionUtils.Random.pickNumberInRange(0, 9);
    if (CHALLENGE >= 4) {
        return moveResult + 1;
    }
    return moveResult;
}

function carMovePrint(carName, moveResult) {
    const DASHES = '-'.repeat(moveResult);
    Console.print(carName + ' : ' + DASHES);
}

function allCarMove(moveResults) {
    return moveResults.map((moveResult) => oneCarMove(moveResult));
}
