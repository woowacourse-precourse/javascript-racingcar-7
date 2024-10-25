import { Random } from '@woowacourse/mission-utils';

function extractMoveValue(numberOfCars) {
  return Array.from({ length: numberOfCars }, () =>
    Random.pickNumberInRange(0, 9)
  );
}
