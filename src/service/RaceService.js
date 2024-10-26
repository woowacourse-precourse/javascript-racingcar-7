import Car from "../domain/Car.js";
import parseArrayToString from "../utils/parseArrayToString.js";
import getRandomNumber from "../utils/getRandomNumber.js";

class RaceService {
  constructor(carNames) {
    this.car = new Car(carNames);
  }

  performRaceRound() {
    const raceRoundResult = this.car.carNames.map((carName, carIndex) => {
      const randomNumber = getRandomNumber();
      this.car.validateForward(randomNumber, carIndex);

      const forwardCount = this.car.forwardCounts[carIndex];
      return { carName, forwardCount };
    });

    return raceRoundResult;
  }

  getRaceWinner() {
    const winnerList = parseArrayToString(this.car.getWinnerList());
    return winnerList;
  }
}

export default RaceService;