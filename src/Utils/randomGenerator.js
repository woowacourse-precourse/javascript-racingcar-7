import { Random } from "@woowacourse/mission-utils";

const randomGenerator = () => {
  return Random.pickNumberInRange(1, 10);
};

export default randomGenerator;
