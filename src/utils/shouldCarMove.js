import { Random } from "@woowacourse/mission-utils"

const shouldCarMove = () => {
  const randomNum = Random.pickNumberInRange(0, 9);
  if (randomNum < 4) return false;
  return true;
}

export default shouldCarMove;