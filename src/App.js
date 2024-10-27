import { Console } from "@woowacourse/mission-utils";
import RaceController from "./controllers/RaceController.js";
import Validator from "./utils/Validator.js";
import UserInput from "./views/UserInput.js";
import DisplayController from "./views/DisplayController.js";

class App {
  constructor() {
    this.userInput = new UserInput();
    this.validator = new Validator();
    this.raceController = new RaceController();
    this.displayController = new DisplayController();
  }

  async run() {
    // Get user input
    const userInput = await this.userInput.getUserInputCars();

    // Split user input by separator
    const userInputArray = userInput.split(",");

    // Get user input count
    const userInputCount = await this.userInput.getUserInputCount();

    // Create initial players positions
    let positions = this.raceController.createPlayersPositions(userInputArray.length);

    // Validate user input
    this.validator.validateNameLength(userInputArray);
    this.validator.validateRound(userInputCount);
    this.validator.validateSeparator(userInput);

    // Game start
    Console.print("\n실행 결과");

    for (let i = 0; i < userInputCount; i++) {

      const nextPostions = this.raceController.movePlayersRandomly(positions);

      positions = nextPostions;
      this.displayController.displayPlayerPositions(userInputArray, positions);
    }

    const winnerArray = this.raceController.getRaceWinnersIndex(positions);

    this.displayController.displayWinners(userInputArray, winnerArray);

  }
}

export default App;
