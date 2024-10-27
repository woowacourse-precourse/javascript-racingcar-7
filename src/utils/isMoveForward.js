import { Random } from '@woowacourse/mission-utils';
import { MOVE_FORWARD_STANDARD, RANDOM_MIN, RANDOM_MAX } from '../constants/numberConstants.js';

function getRandomNumber() {
  return Random.pickNumberInRange(RANDOM_MIN, RANDOM_MAX);
}

export default function isMoveForward() {
  return getRandomNumber() >= MOVE_FORWARD_STANDARD;
}
