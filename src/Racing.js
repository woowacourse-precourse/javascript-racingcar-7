import isMoveForward from './utils/isMoveForward.js';
import { Console } from '@woowacourse/mission-utils';

const MOVEMENT = {};

function initMovement(carNames) {
  carNames.forEach((carName) => {
    MOVEMENT[carName] = '';
  });
}

function startRace(carNames, tryCount) {
  for (let i = 0; i < tryCount; i++) {
    raceTurn(carNames);
  }
}

function raceTurn(carNames) {
  carNames.forEach((carName) => {
    isMoveForward() && (MOVEMENT[carName] += '-');
    Console.print(`${carName} : ${MOVEMENT[carName]}`);
  });
}


export default class Racing {
  constructor(carNames, tryCount) {
    this.carNames = carNames;
    this.tryCount = tryCount;
    initMovement(this.carNames);
  }

  start() {
    Console.print('실행 결과\n');
    startRace(this.carNames, this.tryCount);
  }
}
