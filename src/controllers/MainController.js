import finalRace from "../utils/finalRace.js";
import { sepateInput } from "../utils/parser.js";
import OutputView from "../views/OutputView.js";
import { decisionFinalWinner } from "../models/decisionFinalWinner.js";
import InputView from "../views/InputView.js";
import { InputValid } from "../valid/InputValid.js";


export class MainController{
    async run(){
        try{
            const readInput = await InputView.readInput()
            const rawNames =  readInput.rawNames
            const raceCount = Number(readInput.raceCount)

            InputValid.isRaceCountNum(raceCount)
            /*인풋 유효성 검사*/
            InputValid.isEmptyInput(rawNames,raceCount)
            InputValid.isRaceCountPositive(raceCount)
            
            const names = sepateInput(rawNames)
            InputValid.validPlayerName(names)
            OutputView.printRace();
            const totalWinner = decisionFinalWinner(raceCount,names)

            const finalWinner = finalRace(totalWinner)
            OutputView.printFinalResult(finalWinner)
        
        }catch(error){
            throw error//에러 메세지를 덮어쓰지 않기 위함
        }
    }
}