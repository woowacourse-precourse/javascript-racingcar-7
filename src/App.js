import { Console } from '@woowacourse/mission-utils';

import { makeError } from '../util/makeError.js';
import { getRandomValue } from '../util/getRandomValue.js';
import { checkMove } from '../util/checkMove.js';

class App {
  async run() {
    const inputValue = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');

    const ATTEMPT_COUNT = Number(await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n')); // 시도할 횟수 입력

    const cars = inputValue.split(',').map((car) => car.trim()); // 자동차 이름을 배열에 저장

    makeError(cars);

    const carMoveCount = {};

    cars.forEach((car) => {
      if (!carMoveCount[car]) carMoveCount[car] = [];
    }) // 해시 맵 초기화 


    Console.print('\n');
    Console.print('실행 결과');

    for (let i = 0; i < ATTEMPT_COUNT; i++) { //자동차별 진행 상황 출력
      for (let car of cars) {
        const isMoved = checkMove(getRandomValue());
        if (isMoved) carMoveCount[car].push('-');
        Console.print(`${car} : ${carMoveCount[car].join('')}`);
      }
      Console.print(' ');
    }

    const winners = [];

    for (let car of cars) {
      if (carMoveCount[car].length === ATTEMPT_COUNT) winners.push(car);
    }

    Console.print(`최종 우승자 : ${winners.join(', ')}`);

  }
}

export default App;
