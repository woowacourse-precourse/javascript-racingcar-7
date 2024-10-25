import progressGame from './GamePlayHandler.js';
import { prepareCarData, prepareMoveCount } from './GamePrepare.js';
import pickWinner from './GameResult.js';
import {
  announceWinner,
  inputCarNames,
  inputNumberOfMove,
} from './UserInterface.js';

class App {
  async run() {
    const carNames = await inputCarNames();
    const carDataList = prepareCarData(carNames);

    const numberOfMove = await inputNumberOfMove();
    const moveCount = prepareMoveCount(numberOfMove);

    const raceResults = progressGame(carDataList, moveCount);
    const winner = pickWinner(raceResults);

    announceWinner(winner);
  }
}

export default App;
