import { Random } from "@woowacourse/mission-utils"

function makeRandomNumber(racer){
    const go = Random.pickNumberInRange(0,9)
    const ref = "-".repeat(go); 
    return {go, ref} 
}
export default makeRandom
//const randomInstance=new MakeRandom()