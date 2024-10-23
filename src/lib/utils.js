import { MissionUtils } from "@woowacourse/mission-utils";

export const read = async (input) => {
  return await MissionUtils.Console.readLineAsync(input);
};
export const print = (input) => {
  return MissionUtils.Console.print(input);
};
export const random = (max, min) => {
  return MissionUtils.Random.pickNumberInRange(max, min);
};
