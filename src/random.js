import {Random} from '@woowacourse/mission-utils'

export function getRandomNumber() {
    return Random.pickNumberInRange(0,9);
}

export function isMoveForward() {
    return getRandomNumber() >= 4;
}