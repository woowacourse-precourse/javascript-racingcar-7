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
            if(raceCount<=0){
                throw new Error("경주 횟수는 음수가 될 수 없습니다.")
            }
            const names = sepateInput(rawNames)
            InputValid.validPlayerName(names)

            //Console.print("\n")
            OutputView.printRace();
            const totalWinner = decisionFinalWinner(raceCount,names)
            const finalWinner = finalRace(totalWinner)
            OutputView.printFinalResult(finalWinner)

        }catch(error){
            throw new Error("[ERROR]")
        }
    }
}