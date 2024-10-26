import { MissionUtils } from '@woowacourse/mission-utils';

export default function decideMoveForward() {
  const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
  if (randomNumber >= 4) {
    return true;
  }
  return false;
}
