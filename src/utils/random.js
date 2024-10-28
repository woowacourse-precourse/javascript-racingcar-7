import { MissionUtils } from '@woowacourse/mission-utils';

/**
 * 0과 9 사이의 랜덤한 정수를 생성한다.
 *
 * @function generateRandomNumber
 * @returns {number} 0에서 9 사이의 정수
 */
export default function generateRandomNumber() {
  return MissionUtils.Random.pickNumberInRange(0, 9);
}
