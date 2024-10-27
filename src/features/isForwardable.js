import { Random } from "@woowacourse/mission-utils";

export const isForwardable = () => {
  const num = Random.pickNumberInRange(0, 9);

  if (num >= 4) {
    return true;
  }

  return false;
};
