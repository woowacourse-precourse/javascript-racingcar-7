//oneRace를 raceCount한 토탈 정보가 매개변수로 들어온다
//딕셔너리 형태 dict["pobi"]=3
//딕셔너리를 순회하면서 가장 value가 큰 값을 리턴한다
//동일한 value가 있을 시 포함하여 리턴한다

export const finalRace = (totalWinner)=>{
    const maxWins = Math.max(...Object.values(totalWinner))
    return Object.keys(totalWinner).filter(name=>totalWinner[name] === maxWins)
}