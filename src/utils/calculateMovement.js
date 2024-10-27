import { Random } from "@woowacourse/mission-utils";

export const calculateMovement = () => {
  const randomNumber = Random.pickNumberInRange(1, 9);
  if (randomNumber >= 4) {
    return 1;
  }
  return 0;
};
