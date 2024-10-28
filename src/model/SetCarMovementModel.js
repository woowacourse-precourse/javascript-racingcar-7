import { MissionUtils } from "@woowacourse/mission-utils";

class SetCarMovementModel {
  constructor() {}
  setRandomNumArray(arrayLength) {
    let randomNumArray = [];
    for (let i = 0; i < arrayLength; i++) {
      randomNumArray.push(MissionUtils.Random.pickNumberInRange(0, 9));
    }
    return randomNumArray;
  }
  setCarMovementValues(carNames, tryCount) {
    const arrayLength = carNames.length;
    const carMovement = [];
    for (let count = 0; count < tryCount; count++) {
      carMovement.push(this.setRandomNumArray(arrayLength));
    }
    return carMovement;
  }
}

export default SetCarMovementModel;
