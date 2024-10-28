import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_PRINT_MESSAGES } from "../constants/printMessage.js";

const Input = {
  async getCars(callback) {
    const carString = await MissionUtils.Console.readLineAsync(INPUT_PRINT_MESSAGES.carName);
    const car = carString.split(",");

    callback(car);
    return car;
  },

  async getRepeatCount(callback) {
    const repeatCountString = await MissionUtils.Console.readLineAsync(
      INPUT_PRINT_MESSAGES.repeatCount,
    );

    callback(repeatCountString);
    return Number(repeatCountString);
  },
};

export default Input;
