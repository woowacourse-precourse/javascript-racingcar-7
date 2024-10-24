import { MissionUtils } from "@woowacourse/mission-utils";

export class ReadLine {
  async readInput(message) {
    return await MissionUtils.Console.readLineAsync(message);
  }
}
