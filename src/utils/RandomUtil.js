import { Random } from "@woowacourse/mission-utils";

export function getRandomValue(min, max) {
  return Random.pickNumberInRange(min, max);
}
