import {MissionUtils} from "@woowacourse/mission-utils"

function makeRandomNumber(){
    return MissionUtils.Random.pickNumberInRange(0,9)
}
export default makeRandom
//const randomInstance=new MakeRandom()