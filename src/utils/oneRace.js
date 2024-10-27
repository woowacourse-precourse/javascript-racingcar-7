
import { Console } from "@woowacourse/mission-utils" 
import makeRandomNumber from "./MakeRamdom.js"

//각 횟수마다의 위너를 기록한다.
const oneRace = (names)=>{
    ///전진하는 비열 Random.pickNumberInRange(0,9)
    const winners=[]
    names.forEach(name=>{
        const{ref,go} = makeRandomNumber(name)
        if(go>=4){
            winners.push(name)
        }
        printPlayerGoTo(name,ref)
    })
    Console.print("\n")
    return winners//["winner1","winner2"]//배열을 리턴
}

const printPlayerGoTo=(name,ref)=>{
    Console.print(`${name} : ${ref}`)
}

export default oneRace