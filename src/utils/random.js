import { MissionUtils } from '@woowacourse/mission-utils';

function RandomNum() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
}
export default RandomNum;
