import { getUserInput } from './View/getUserInput.js';
import { INPUT_ATTEMPT_COUNT, INPUT_CAR_NAME } from './constant/message.js';
import { RaceManager } from './Controller/RaceManager.js';

class App {
  async run() {
    const carNames = await getUserInput(INPUT_CAR_NAME);
    const count = await getUserInput(INPUT_ATTEMPT_COUNT);

    const carRace = new RaceManager();

    carNames.split(',').forEach((name) => {
      carRace.makeCar(name);
    });

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
