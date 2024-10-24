import { MissionUtils } from '@woowacourse/mission-utils';

export default class RandomNumber{
    static generateNumberZeroToNine(){
        return MissionUtils.Random.pickNumberInRange(0, 9);
    }
}