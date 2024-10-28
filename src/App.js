import { getCarList, getRound } from './utils/userInput.js';
import { StartRacingGame } from './services/startRacingGame';
import { PrintWinner } from './services/printWinner';

class App {
  async run() {
    const carList = await getCarList();
    const round = await getRound();
    const score = new Array(carList.length).fill('');

    StartRacingGame(carList, round, score);
    PrintWinner(carList, score);
  }
}

export default App;
