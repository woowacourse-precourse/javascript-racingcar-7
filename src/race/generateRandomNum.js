import { Random } from '@woowacourse/mission-utils';

export const generateRandomNumber = () => {
  return Random.pickNumberInRange(0, 9);
};
