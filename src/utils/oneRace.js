
import makeRandom from "./MakeRamdom"

//그냥 한번에 계산 해버려?
export const oneRace = (names)=>{
    ///전진하는 비열 Random.pickNumberInRange(0,9)
    const winners=[]
    names.forEach(name=>{
        const{ref,go}=makeRandom(name)
        if(go>=4){
            winners.push(name)
        }
    })
    return winners//["winner1","winner2"]//배열을 리턴
}