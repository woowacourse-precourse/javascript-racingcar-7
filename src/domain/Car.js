import getElementsWithMatchingValue from "../utils/getElementsWithMatchingValue.js";
import getMaxValue from "../utils/getMaxValue.js";

class Car {
  carNames;
  forwardCounts;

  constructor(carNames) {
    this.carNames = carNames;
    this.forwardCounts = Array(this.carNames.length).fill(0);
  }

  validateForward(randomNumber, carIndex) {
    if (randomNumber >= 4) {
      this.forwardCounts[carIndex]++;
    }
  }
  
  getWinnerList() {
    const maxForwardNum = getMaxValue(this.forwardCounts);
    const winnerList = getElementsWithMatchingValue(this.carNames, this.forwardCounts, maxForwardNum);
    return winnerList;
  }
}

export default Car;
