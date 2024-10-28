import { MissionUtils } from "@woowacourse/mission-utils";

export async function getInput(input) {
  return await MissionUtils.Console.readLineAsync(input);
}
export function printResult(result) {
  MissionUtils.Console.print(result);
}

export function getRandomNumberInRage(start, end) {
  return MissionUtils.Random.pickNumberInRange(start, end);
}
