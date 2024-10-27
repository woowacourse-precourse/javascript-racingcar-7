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
    Console.print('\n');
  }
}

function raceTurn(carNames) {
  carNames.forEach((carName) => {
    isMoveForward() && (MOVEMENT[carName] += '-');
    Console.print(`${carName} : ${MOVEMENT[carName]}`);
  });
}

function printWinner(carNames) {
  const maxDistance = Math.max(...carNames.map((carName) => MOVEMENT[carName].length));
  const winners = carNames.filter((carName) => MOVEMENT[carName].length === maxDistance);
  Console.print(`최종 우승자 : ${winners.join(', ')}`);
}

export default class Racing {
  constructor(carNames, tryCount) {
    this.carNames = carNames;
    this.tryCount = tryCount;
    initMovement(this.carNames);
  }

  start() {
    Console.print('\n실행 결과');
    startRace(this.carNames, this.tryCount);
  }

  printWinner() {
    printWinner(this.carNames);
  }
}
