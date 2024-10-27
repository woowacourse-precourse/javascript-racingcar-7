import oneRace from "../utils/oneRace.js"

export const decisionFinalWinner=(raceCount,names)=>{
    const totalWinner={}//딕셔너리
    //딕셔너리 초기화
    names.forEach(name=>{
        totalWinner[name]=0
    })//초기화
    let raceCountCopy = raceCount
    while(raceCountCopy--){
        var winners=[]
        winners = oneRace(names)
    }
    if(winners.length === 0){
        throw new Error("[ERROR] 우승자가 존재하지 않습니다.")
    }
    winners.forEach(name=>{
        totalWinner[name]+=1
    })
    return totalWinner//딕셔너리 반환
}