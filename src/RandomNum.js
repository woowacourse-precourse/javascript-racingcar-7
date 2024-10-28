import { MissionUtils } from '@woowacourse/mission-utils'
import { number } from './constants.js';

export default class RandomNum {
    static getRandomNumber() {
        return MissionUtils.Random.pickNumberInRange(number.startNum, number.endNum);
    }
}