import Input from './io/Input.js';
import Output from './io/Output.js';
import RacingCarName from './game/RacingCarName.js';
import RacingTryNumber from './game/RacingTryNumber.js';
import CarController from './game/CarController.js';
import GAME from './constants/Game.js';

class App {
  async run() {
    const carName = await Input.getCarName();
    RacingCarName.validate(carName);

    const tryNumber = await Input.getTryNumber();
    RacingTryNumber.validate(tryNumber);

    const carNameArray = carName.split(GAME.inputDelimeterSign).map((name) => name.trim());
    const carController = new CarController(carNameArray);

    Output.printResultHeader();
    this.runRaces(carController, Number(tryNumber));
    carController.getWinner();
  }

  runRaces(carController, tryNumber) {
    for (let i = 0; i < tryNumber; i++) {
      this.excuteRace(carController);
    }
  }

  excuteRace(carController) {
    carController.updateCarPosition();
    carController.printResult();
  }
}

export default App;
