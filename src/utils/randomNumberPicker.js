import { MissionUtils } from "@woowacourse/mission-utils";

function getRandomNumber(min, max) {
    return MissionUtils.Random.pickNumberInRange(min, max);
}

export default getRandomNumber;