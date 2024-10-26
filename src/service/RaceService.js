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
      this.car.isForwardMovementValid(randomNumber, carIndex);
      return { carName: carName, forwardCount: this.car.forwardCounts[carIndex] };
    });
    return raceRoundResult;
  }

  getRaceWinner() {
    const winner = parseArrayToString(this.car.getWinnerList());
    return winner;
  }
}

export default RaceService;