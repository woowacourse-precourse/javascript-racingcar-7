import OutputView from '../views/OutputView.js';

function executeRaceRounds(race) {
  OutputView.printStart();
  for (let i = 0; i < race.getRounds(); i++) {
    race.runRound();
    OutputView.printRoundResult(race.getCars());
  }
}

export default executeRaceRounds;
