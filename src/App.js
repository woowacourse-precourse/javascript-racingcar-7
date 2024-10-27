import { getCars, getNumberOfRaces } from './view/getUserInput.js';
import { carNameValidate } from './utils/carNameValidator.js';
import { raceCountValidate } from './utils/raceCountValidator.js';
import { printRaceWinner } from './view/raceView.js';
import { Car } from './model/car.js';
import { Race } from './model/race.js';

class App {
  async run() {
    const cars = await getCars();
    const carNames = carNameValidate(cars);

    const numberOfMatches = await getNumberOfRaces();
    const raceRound = raceCountValidate(numberOfMatches);

    const carLists = carNames.map((name) => new Car(name));
    const race = new Race(carLists, raceRound);

    while (race.isRaceOver()) {
      race.roundStart();
      race.showRaceStatusByRound();
    }

    const winner = race.getFinalWinner();
    printRaceWinner(winner);
  }
}

export default App;
