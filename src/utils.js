import { MissionUtils } from "@woowacourse/mission-utils";

export const readLineAsync = async (message) => {
  return await MissionUtils.Console.readLineAsync(message);
};

export const print = (message) => {
  MissionUtils.Console.print(message);
};
