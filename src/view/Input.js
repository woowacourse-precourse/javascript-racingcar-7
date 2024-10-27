import { MissionUtils } from "@woowacourse/mission-utils";

const Input = {
  async getCars(callback) {
    const carString = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const car = carString.split(",");

    callback(car);
    return car;
  },

  async getRepeatCount(callback) {
    const repeatCountString = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

    callback(repeatCountString);
    return Number(repeatCountString);
  },
};

export default Input;
