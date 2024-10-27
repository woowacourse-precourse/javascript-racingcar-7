import { Console } from "@woowacourse/mission-utils";
import { carCountLimitCheck, checkTryNum } from "./Utils.js";
import { LOG_MESSAGE } from "./content.js";
class RacingCar {
  constructor(tryNum) {
    tryNum = new tryNum();
  }
  async getCarName() {
    //자동차 입력 받기
    const input = await Console.readLineAsync(LOG_MESSAGE.START_MESSAGE);
    const carInput = input.split(",");
    carCountLimitCheck(carInput);
  }
  static async getTryNum() {
    //시도할 횟수 입력 받기
    const numInput = await Console.readLineAsync(LOG_MESSAGE.TRY_NUM_MESSAGE);
    const tryNum = numInput;
    checkTryNum(tryNum);
  }
}
export function startRace(tryNum) {
  for (let i = 0; i < tryNum; i++) {
    for (const currentCar in carName) {
      const randomNum = Random.pickNumberInRange(0, 9);
      if (randomNum >= 4) {
        carName[currentCar]++;
      }
    }
  }
}
export default RacingCar;
