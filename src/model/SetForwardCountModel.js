class SetForwardCountModel {
  constructor() {}
  getForwardCount(attempts) {
    let forwardCount = [0, 0, 0];
    for (let index = 0; index < attempts.length; index++) {
      const criteriaNum = attempts[index];
      this.checkCarMoveForward(criteriaNum, forwardCount, index);
    }
    return forwardCount;
  }
  checkCarMoveForward(criteriaNum, forwardCount, index) {
    if (criteriaNum >= 4) {
      this.calculateForwardCount(forwardCount, index);
    }
  }
  calculateForwardCount(forwardCount, index) {
    forwardCount[index] += 1;
  }
}

export default SetForwardCountModel;
