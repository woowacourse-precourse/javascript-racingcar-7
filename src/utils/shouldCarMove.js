import { Random } from "@woowacourse/mission-utils";

const shouldCarMove = () => {
  const randomNum = Random.pickNumberInRange(0, 9);
  
  return randomNum >= 4;
};

export default shouldCarMove;
