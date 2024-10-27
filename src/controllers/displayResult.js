import RaceResult from '../models/RaceResult.js';
import OutputView from '../views/OutputView.js';

function displayResult(race) {
  const winners = RaceResult.determineWinners(race.getCars());
  OutputView.printWinners(winners);
}

export default displayResult;
