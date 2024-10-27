import { Console } from '@woowacourse/mission-utils';
import decideMoveForward from './decideMoveForward.js';
import printSituation from './printSituation.js';

export default function moveForwardRandomly(carNameArray, attemptNumber) {
  const moveForwardInformation = {};
  carNameArray.map((name) => {
    moveForwardInformation[name] = 0;
  });

  for (let i = 0; i < attemptNumber; i++) {
    carNameArray.map((name) => {
      const isMovingForward = decideMoveForward();
      if (isMovingForward) {
        moveForwardInformation[name] += 1;
      }
    });
    printSituation(moveForwardInformation);
    Console.print('');
  }
  return moveForwardInformation;
}
