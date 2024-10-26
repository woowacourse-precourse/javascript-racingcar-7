
import { MissionUtils } from "@woowacourse/mission-utils";

class RandomNumber{
  async RNumber(){
    const randomnumber=MissionUtils.Random.pickNumberInRange(0,9);
    if(randomnumber >= 4){
      return 1;
    }
    else{
      return 0;
    }
  }
}

export default RandomNumber;