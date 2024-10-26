import { MissionUtils } from '@woowacourse/mission-utils';

function isRandomSingleDigitHigherThanThree() {
  const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);

  return randomNumber > 3;
}

export default isRandomSingleDigitHigherThanThree;
