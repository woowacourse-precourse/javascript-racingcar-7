import { finalRace } from "../utils/finalRace.js";
import { sepateInput } from "../utils/parser.js";
import OutputView from "../views/outputView.js";
import { decisionContoller } from "./decisionContoller.js";
import InputView from "../views/inputView.js";

export class MainController{
    async run(){
        try{
            const readInput = await InputView.readInput()
            const rawNames =  readInput.rawNames
            const raceCount = readInput.raceCount
            if(raceCount<=0){
                throw new Error("경주 횟수는 음수가 될 수 없습니다.")
            }
            const names = sepateInput(rawNames)
            totalWinner = decisionContoller(raceCount,names)
            finalWinner = finalRace(totalWinner)
            OutputView.printRace()
            OutputView.printFinalResult(finalWinner)

        }catch(error){
            console.error("에러가 발생했습니다",error)
        }
    }
}