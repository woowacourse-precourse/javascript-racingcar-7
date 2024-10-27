import RacingResult from '../models/RacingResult.js';
import OutputView from '../views/OutputView.js';

function displayResult(race) {
  const winners = RacingResult.determineWinners(race.getCars());
  OutputView.printResult(race.getCars(), winners);
}

export default displayResult;
