import { Random } from "@woowacourse/mission-utils"

function makeRandomNumber(){
    return Random.pickNumberInRange(0,9)
}
export default makeRandom
//const randomInstance=new MakeRandom()