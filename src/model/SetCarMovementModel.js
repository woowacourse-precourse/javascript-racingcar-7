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
  setCarMovementValues(carName, tryCount) {
    const arrayLength = carName.length;
    const carMovement = [];
    for (let count = 0; count < tryCount; count++) {
      carMovement.push(this.setRandomNumArray(arrayLength));
    }
  }
}

export default SetCarMovementModel;
