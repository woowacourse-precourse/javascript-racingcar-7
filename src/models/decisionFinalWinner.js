
import oneRace from "../utils/oneRace.js"

export const decisionFinalWinner=(raceCount,names)=>{
    const totalWinner={}//딕셔너리
    //딕셔너리 초기화
    //names의 item을 뽑아 totalWinner["name"]=0으로 초기화 하고 싶음
    names.forEach(name=>{
        totalWinner[name]=0
    })//초기화
    let raceCountCopy=raceCount
    while(raceCountCopy--){
        var winners=[]
        winners = oneRace(names)
    }

    winners.forEach(name=>{
        totalWinner[name]+=1
    })
    return totalWinner//딕셔너리 반환
}