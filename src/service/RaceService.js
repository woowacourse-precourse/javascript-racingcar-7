import Cars from '../domain/Cars.js';
import parseArrayToString from '../utils/parseArrayToString.js';
import getRandomNumber from '../utils/getRandomNumber.js';

class RaceService {
  constructor(carNames) {
    this.cars = new Cars(carNames);
  }

  performRaceRound() {
    const raceRoundResult = this.cars.carNames.map((carName, carIndex) => {
      const randomNumber = getRandomNumber();
      this.cars.validateForward(randomNumber, carIndex);

      const forwardCount = this.cars.forwardCounts[carIndex];
      return { carName, forwardCount };
    });

    return raceRoundResult;
  }

  getRaceWinner() {
    const winnerList = parseArrayToString(this.cars.getWinnerList());
    return winnerList;
  }
}

export default RaceService;