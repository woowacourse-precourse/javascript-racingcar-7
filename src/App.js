import createCars from './functions/createCars.js';
import getValidatedCarNames from './functions/getValidatedCarNames.js';
import getValidatedTryCount from './functions/getValidatedTryCount.js';
import RacingGame from './racinggame/RacingGame.js';
import displayGameGuide from './utils/displayGameGuide.js';

class App {
  async run() {
    displayGameGuide();
    const carNamesArray = await getValidatedCarNames();
    const tryCount = await getValidatedTryCount();
    const cars = createCars(carNamesArray);
    const racingGame = new RacingGame(cars, tryCount);
    racingGame.play();
  }
}

export default App;
