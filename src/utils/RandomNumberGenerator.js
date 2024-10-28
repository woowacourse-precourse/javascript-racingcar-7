import { MissionUtils } from '@woowacourse/mission-utils';

// 0 ~ 9에서 랜덤으로 수를 반환하는 유틸
const getRandomNumber = () => {
    return MissionUtils.Random.pickNumberInRange(0, 9);
}

export default getRandomNumber;