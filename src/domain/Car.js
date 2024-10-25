class Car {
  carNames;
  forwardCounts;

  constructor(carNames) {
    this.carNames = carNames;
    this.forwardCounts = Array(this.carNames.length).fill(0);
  }

  isForwardMovementValid(randomNumber, carIndex) {
    if (randomNumber >= 4) {
      this.forwardCounts[carIndex]++;
    }
  }
  
  getWinnerList() {
    const maxForwardNum = Math.max(...this.forwardCounts);

    let findIndexs = this.forwardCounts.indexOf(maxForwardNum);
    let winnerIndexList = [];
    while (findIndexs !== -1) {
      winnerIndexList.push(findIndexs);
      findIndexs = this.forwardCounts.indexOf(maxForwardNum, findIndexs + 1);
    }

    let winnerList = [];
    this.carNames.filter((carName, carIndex) => {
      const checkFindIndex = (index) => index === carIndex;
      if (winnerIndexList.some(checkFindIndex)) {
        winnerList.push(carName);
      }
    });
    return winnerList;
  }
}

export default Car;