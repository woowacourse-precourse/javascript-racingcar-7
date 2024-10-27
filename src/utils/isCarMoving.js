import { Random } from "@woowacourse/mission-utils";

export const isCarMoving = () => {
  const randomNumber = Random.pickNumberInRange(1, 10);
  if (randomNumber >= 4) {
    return randomNumber;
  }
  return -1;
};
