import { Console } from "@woowacourse/mission-utils";
import RaceController from "./controllers/RaceController";
import Validator from "./utils/Validator";
import UserInput from "./views/UserInput";
import DisplayController from "./views/DisplayController";

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
