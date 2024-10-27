import { MissionUtils } from '@woowacourse/mission-utils';

export const getRandomNumber = (min, max) => {
  return MissionUtils.Random.pickNumberInRange(min, max);
};

export const nameLimit5 = (name) => {
  if (name.length > 5) {
    throw new Error('[ERROR] 이름은 5자 이하만 가능합니다.');
  }
};
