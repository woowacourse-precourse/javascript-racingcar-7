import InputView from "../views/inputView";

export class MainController{
    async run(){
        try{
            const readInput = await InputView.readInput()
            const rawNames= readInput.rawNames
            const raceCount=readInput.raceCount
        }catch(error){

        }
    }
}