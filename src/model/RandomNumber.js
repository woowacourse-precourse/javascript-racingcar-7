
import { MissionUtils } from "@woowacourse/mission-utils";

class RandomNumber{
  async RNumber(){
    return MissionUtils.Random.pickNumberInRange(0,9);
  }
}

export default RandomNumber;