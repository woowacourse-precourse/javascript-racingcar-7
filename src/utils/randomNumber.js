import { Random } from "@woowacourse/mission-utils";

export const randomNumber = (min, max) => {
  return Random.pickNumberInRange(min, max);
};
