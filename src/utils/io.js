import { MissionUtils } from '@woowacourse/mission-utils';

const io = {
  in: (string) => MissionUtils.Console.readLineAsync(string),
  out: (string) => MissionUtils.Console.print(string),
};

export default io;
