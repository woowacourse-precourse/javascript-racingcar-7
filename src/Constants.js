import { MissionUtils } from '@woowacourse/mission-utils';

export const getRandomNumber = (min, max) => {
  return MissionUtils.Random.pickNumberInRange(min, max);
};

export const nameLimitTest = (name) => {
  if (name.length > 5) {
    throw new Error('[ERROR] 이름은 5자 이하만 가능합니다.');
  }
};

export const attempsTest = (attemps) => {
  const numberAttemps = Number(attemps);
  if (isNaN(numberAttemps)) {
    throw new Error('[ERROR] 숫자만 입력할 수 있습니다.');
  }
  if (numberAttemps <= 0) {
    throw new Error('[ERROR] 양수만 입력할 수 있습니다.');
  }
};
