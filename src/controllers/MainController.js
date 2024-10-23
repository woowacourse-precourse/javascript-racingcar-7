import InputView from "../views/inputView.js";

export class MainController{
    async run(){
        try{
            const readInput = InputView.readInput()
            const rawNames=  readInput.rawNames
            const raceCount= readInput.raceCount
        }catch(error){
            console.error("에러가 발생했습니다",error)
        }
    }
}