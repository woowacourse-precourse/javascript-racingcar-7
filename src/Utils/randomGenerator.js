import { Random } from "@woowacourse/mission-utils";

/**
 *
 * @returns {number}
 * @summary 1부터 10까지의 랜덤한 숫자를 반환한다.
 */
const randomGenerator = () => {
  return Random.pickNumberInRange(1, 10);
};

export default randomGenerator;
