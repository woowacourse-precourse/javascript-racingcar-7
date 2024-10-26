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
    const maxForwardNum = Math.max(...this.forwardCounts);

    const winnerList = this.carNames.filter((_, carIndex) => {
      return this.forwardCounts[carIndex] === maxForwardNum;
    });

    return winnerList;
  }
}

export default Car;
