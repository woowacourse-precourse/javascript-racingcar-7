class SetForwardCountModel {
  constructor() {}
  getTotalDistant(attempts, arrayLength, initialTotalDistant) {
    const attemptDistant = this.getAttemptDistant(attempts, arrayLength);
    const totalDistant = attemptDistant.map(
      (value, index) => value + initialTotalDistant[index]
    );
    return totalDistant;
  }
  getAttemptDistant(attempts, arrayLength) {
    let attemptDistant = Array(arrayLength).fill(0);
    for (let index = 0; index < attempts.length; index++) {
      const criteriaNum = attempts[index];
      this.checkCarMoveForward(criteriaNum, attemptDistant, index);
    }
    return attemptDistant;
  }
  checkCarMoveForward(criteriaNum, attemptDistant, index) {
    if (criteriaNum >= 4) {
      this.addForwardCount(attemptDistant, index);
    }
  }
  addForwardCount(attemptDistant, index) {
    attemptDistant[index] += 1;
  }
}

export default SetForwardCountModel;
