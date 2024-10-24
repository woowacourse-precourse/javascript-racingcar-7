import { MissionUtils } from "@woowacourse/mission-utils";

export class ReadLine {
  async readInput(inputMessage) {
    return await MissionUtils.Console.readLineAsync(inputMessage);
  }
}
