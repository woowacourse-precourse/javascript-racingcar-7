import InputView from "../views/inputView.js";//클래스는 확장자 붙여야

export class MainController{
    async run(){
        try{
            const readInput = InputView.readInput()
            const rawNames =  readInput.rawNames
            const raceCount = readInput.raceCount
            if(raceCount<=0){
                throw new Error("경주 횟수는 음수가 될 수 없습니다.")
            }
        }catch(error){
            console.error("에러가 발생했습니다",error)
        }
    }
}