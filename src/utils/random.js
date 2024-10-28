import { Random } from '@woowacourse/mission-utils';
const getRandomDigit = () => {
  return Random.pickNumberInRange(0, 9);
};

export { getRandomDigit };
