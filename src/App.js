import { MissionUtils } from '@woowacourse/mission-utils';
import {
  getUserCarName,
  getUserRaceAttempts,
  displayRaceState,
  displayWinners,
} from './views/UserInterface.js';
import {
  splitCarNamesByDelimiter,
  createCarDataArray,
  updateCarDataPositions,
  formatAllCarPositions,
  findCarWinners,
} from './models/CarModel.js';
import {
  validateCarNames,
  validateRaceCountInput,
} from './models/Validation.js';

class App {
  async run() {
    try {
      const carNames = await this.getValidatedCarNames();
      const raceAttempts = await this.getValidatedRaceAttempts();
      const initialCarData = createCarDataArray(carNames);

      MissionUtils.Console.print(`\n실행 결과`);
      const finalCarData = this.executeRace(initialCarData, raceAttempts);
      const winnerName = findCarWinners(finalCarData);

      displayWinners(winnerName);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }

  async getValidatedCarNames() {
    const userInputCar = await getUserCarName();
    const carNames = splitCarNamesByDelimiter(userInputCar.toString());
    validateCarNames(carNames);

    return carNames;
  }

  async getValidatedRaceAttempts() {
    const userInputRacingNum = await getUserRaceAttempts();
    validateRaceCountInput(userInputRacingNum);

    return userInputRacingNum;
  }

  executeRace(initialCarData, raceAttempts) {
    return Array.from({ length: raceAttempts }).reduce((acc) => {
      const updatedCarData = updateCarDataPositions(acc);
      const carPositionsRepresentation = formatAllCarPositions(updatedCarData);

      displayRaceState(carPositionsRepresentation);

      return updatedCarData;
    }, initialCarData);
  }
}

export default App;
