import { finalRace } from "../utils/finalRace.js";
import { sepateInput } from "../utils/parser.js";
import OutputView from "../views/outputView.js";
import { decisionFinalWinner } from "../models/decisionFinalWinner.js";
import InputView from "../views/inputView.js";
import { InputValid } from "../valid/inputValid.js";

export class MainController{
    async run(){
        try{
            const readInput = await InputView.readInput()
            const rawNames =  readInput.rawNames
            const raceCount = readInput.raceCount
    
            /*인풋 유효성 검사*/
            InputValid.isEmptyInput(rawNames,raceCount)
            InputValid.isRaceCountNum(raceCount)
            InputValid.isRaceCountPositive(raceCount)

            const names = sepateInput(rawNames)
            InputValid.validPlayerName(names)
            OutputView.printRace();
            const totalWinner = decisionFinalWinner(raceCount,names)
            const finalWinner = finalRace(totalWinner)
            OutputView.printFinalResult(finalWinner)
        }catch(error){
            console.error("에러 발생:", error.message);
            throw new Error("[ERROR]")
        }
    }
}