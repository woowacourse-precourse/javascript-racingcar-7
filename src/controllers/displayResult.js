import RacingResult from '../models/RacingResult.js';
import OutputView from '../views/OutputView.js';

function displayRaceResult(race) {
  const winners = RacingResult.determineWinners(race.getCars());
  OutputView.printResult(race.getCars(), winners);
}

export default displayRaceResult;
