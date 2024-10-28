import { getUserInput } from './View/getUserInput.js';
import { INPUT_ATTEMPT_COUNT, INPUT_CAR_NAME } from './constant/raceMessage.js';
import { RaceManager } from './Controller/RaceManager.js';
import { isValidName } from './validator/isValidName.js';
import { isValidCount } from './validator/isValidCount.js';

class App {
  async run() {
    const carRace = new RaceManager();
    const carNames = await getUserInput(INPUT_CAR_NAME);

    carNames.split(',').forEach((name) => {
      carRace.makeCar(name);
    });

    const count = await getUserInput(INPUT_ATTEMPT_COUNT);
    isValidCount(count);
    for (let i = 0; i < count; i++) {
      carRace.runRaceStep();
      carRace.showRaceStep();
    }

    const maxDistance = carRace.getMaxDistance();
    const winnerCars = carRace.getWinnerCar(maxDistance);
    carRace.announceWinner(winnerCars);
  }
}

export default App;
