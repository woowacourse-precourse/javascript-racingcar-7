import { Console } from "@woowacourse/mission-utils" 
import makeRandom from "./makeRandom.js"

//각 횟수마다의 위너를 기록한다.
const oneRace = (names)=>{
    const winners=[]
    names.forEach(name=>{
        const{ref,go} = makeRandom()
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