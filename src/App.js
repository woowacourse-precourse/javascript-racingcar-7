import RacingGame from "./Model/RacingGame.js";
import InputUtils from "./Utils/InputUtils.js";

class App {

  async run() {

    const carNameList = InputUtils.validateCarNameList();
    const tryNumber = InputUtils.validateTryNumber();

    const game = new RacingGame(carNameList, tryNumber);

    game.start();
  }

}

export default App;

