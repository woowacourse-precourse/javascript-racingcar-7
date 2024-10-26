import { MissionUtils } from '@woowacourse/mission-utils';

export function generateRandomNum() {
  return MissionUtils.Random.pickNumberInRange(0,9);
}