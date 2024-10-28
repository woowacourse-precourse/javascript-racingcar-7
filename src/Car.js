import { MissionUtils } from "@woowacourse/mission-utils";

export class Car {
  constructor(name) {
    this.name = name;
    this.moveCount = 0;
  }
  //실행될때 마다 random 넘버에 따라 카운트값 증가
  plusCnt() {
    const randomNumer = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNumer >= 4) {
      this.moveCount++;
    }
  }
  getPosition() {
    return this.moveCount;
  }
}
