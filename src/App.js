import { carNameInputHandler, tryNumberHandler } from './utils/userInput.js';
import { initializePositions } from './services/initializePositions.js';
import { calculateWinners } from './services/calculateWinners.js';
import { startRacingGame } from './services/startRacingGame.js';
import { displayWinners } from './views/displayWinners.js';

class App {
	async run() {
		const carNameList = await carNameInputHandler();
		const tryNumber = await tryNumberHandler();

		const positions = initializePositions(carNameList.length);

		startRacingGame(carNameList, tryNumber, positions);

		const winners = calculateWinners(carNameList, positions);
		displayWinners(winners);
	}
}

export default App;
