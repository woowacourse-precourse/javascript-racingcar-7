import { Console, Random } from "@woowacourse/mission-utils";
import Utils from "./Utils.js";
import { LOG_MESSAGE } from "./content.js";
class RacingCar {
  constructor() {
    this.utils = new Utils();
    // this.carName = carName;
  }
  async run() {
    this.utils.carName = await this.getCarName();
    this.utils.tryNum = await this.getTryNum();
    this.tryCount(this.utils.tryNum);
  }
  async getCarName() {
    //자동차 입력 받기
    const input = await Console.readLineAsync(LOG_MESSAGE.START_MESSAGE);
    const carInput = input.split(",");
    return this.utils.carCountLimitCheck(carInput);
  }
  async getTryNum() {
    //시도할 횟수 입력 받기
    const numInput = await Console.readLineAsync(LOG_MESSAGE.TRY_NUM_MESSAGE);
    return this.utils.checkTryNum(numInput);
  }
  tryCount(tryNum) {
    // 시도 횟수
    for (let i = 0; i < tryNum; i++) {
      this.startRace(tryNum);
    }
  }

  startRace() {
    //무작위 수를 받은 뒤 전진 조건 검사
    for (const currentCar in this.utils.carName) {
      const randomNum = Random.pickNumberInRange(0, 9);
      if (randomNum >= 4) {
        this.utils.carName[currentCar]++;
      }
    }
    // Console.print(carName);
  }
}

export default RacingCar;
