import { MissionUtils } from "@woowacourse/mission-utils";

const getRandomValue =()=> MissionUtils.Random.pickNumberInRange(0, 9);

export default getRandomValue