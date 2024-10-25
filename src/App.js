import getValidatedCarNames from './functions/getValidatedCarNames.js';
import getValidatedTryCount from './functions/getValidatedTryCount.js';
import setUpRacingGame from './functions/setUpRacingGame.js';

class App {
  async run() {
    const carNamesArray = await getValidatedCarNames();
    const tryCount = await getValidatedTryCount();

    const racingGame = setUpRacingGame(carNamesArray, tryCount);
    racingGame.play();
  }
}

export default App;
