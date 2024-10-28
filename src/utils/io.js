import { MissionUtils } from "@woowacourse/mission-utils";

const io = {
  in: (string) => {
    return MissionUtils.Console.readLineAsync(string);
  },
  out: (string) => {
    return MissionUtils.Console.print(string);
  }
};

export default io;