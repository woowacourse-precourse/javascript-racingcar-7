import { MissionUtils } from "@woowacourse/mission-utils";

function makeRandom(){
    const go = MissionUtils.Random.pickNumberInRange(0, 9);
    const ref = "-".repeat(go); 
    return {go, ref} 
}
export default makeRandom