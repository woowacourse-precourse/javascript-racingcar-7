import { MissionUtils } from "@woowacourse/mission-utils";

export function RandomNumbers(count) {
  const randomcounts = [];
  for (let i = 0; i < count; i++) {
    const RandomNum = MissionUtils.Random.pickNumberInRange(0, 9);
    randomcounts.push(RandomNum);
  }
  return randomcounts;
}
