import { Random } from '@woowacourse/mission-utils';

export const getRandomNumber = () => {
  return Random.pickNumberInRange(0, 9);
};
