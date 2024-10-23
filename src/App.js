import { Console } from "@woowacourse/mission-utils";
import RACING_VARIABLES from './constants/RacingVariables';
import RaceController from "./controllers/RaceController";
import Validator from "./utils/Validator";
import UserInput from "./views/UserInput";





class DisplayController{

  async displayPlayerPositions (players, positions){
    for (let i = 0; i<players.length;i++){
      Console.print(`${players[i]} : ${ RACING_VARIABLES.POSITION_MARKER.repeat(positions[i])}`);
    }
    Console.print("");
  }

  async displayWinners (players, winners){
    const winnerArray = winners.map(idx => players[idx])

    Console.print(`${RACING_VARIABLES.WINNER_PROMPT} : ${winnerArray.join(',')}`)
  }
}


class App {
  constructor (){
    this.userInput = new UserInput();
    this.validator = new Validator();
    this.raceController = new RaceController();
    this.displayController = new DisplayController();
  }
  async run() {
    const userInput = await this.userInput.getUserInputCars();
    const userInputArray = userInput.split(",");

    this.validator.validateNameLength(userInputArray);

    let positions = this.raceController.createPlayersPositions(userInputArray.length);

    const userInputCount = await this.userInput.getUserInputCount();

    this.validator.validateRound(userInputCount);

    
    // Game start
    Console.print("\n실행 결과");
    for (let i = 0; i < userInputCount; i++){
      
      let nextPostions = this.raceController.movePlayersRandomly(positions);

      positions = nextPostions;
      this.displayController.displayPlayerPositions(userInputArray , positions);
    }

    let winnerArray = this.raceController.getRaceWinners(userInputArray, positions);

    this.displayController.displayWinners(userInputArray, winnerArray);

  }
}

export default App;
