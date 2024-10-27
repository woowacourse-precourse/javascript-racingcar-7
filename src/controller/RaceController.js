import InputView from "../view/inputView.js";
import Race from "../model/Race.js";
import Winner from "../model/Winner.js";
import OutputView from "../view/OutputView.js";

const inputView = new InputView();
const raceinstance=new Race();
const winnerinstance =new Winner();
const outputView =new OutputView();

class RaceController{
  async run(){
    const {car, tryNumber} = await inputView.getInput();
    let arr=new Array(car.length).fill(0);

    for(let i=0;i<tryNumber;i++){
      await raceinstance.race(car,arr);
      outputView.degreeOutput(car,arr);
    }
    
    const winnerresult =await winnerinstance.winner(car,arr);
    await outputView.printOutput(winnerresult);
  }
}

export default RaceController;