import { Random } from "@woowacourse/mission-utils"
import makeRandom from "./MakeRamdom"

//그냥 한번에 계산 해버려?
export const oneRace = (names)=>{
    ///전진하는 비열 Random.pickNumberInRange(0,9)
    const winner=[]
    names.forEach(name=>{
        const{ref,go}=makeRandom(name)
        if(go>=4){
            winner.push(name)
        }
    })
    return winner
}