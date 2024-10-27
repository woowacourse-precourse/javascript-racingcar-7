import { Random } from '@woowacourse/mission-utils'

function makeRandomNumber(){
    const go = Random.pickNumberInRange(0,9)
    const ref = "-".repeat(go); 
    return {go, ref} 
}
export default makeRandomNumber