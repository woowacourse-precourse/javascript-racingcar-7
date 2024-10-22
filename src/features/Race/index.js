import { Console } from '@woowacourse/mission-utils';
import moveForward from './moveForward.js';

const Race = (cars, count) => {
  let forwardCount = new Array(cars.length).fill(0);

  for (let c = 0; c < count; c++) {
    cars.map((_, idx) => {
      forwardCount[idx] += moveForward();
    });
  }

  const max = Math.max(...forwardCount);

  let winnerIdx = [];
  forwardCount.map((cnt, idx) => {
    if (cnt === max) {
      winnerIdx.push(idx);
    }
  });

  for (let idx of winnerIdx) {
    Console.print(`${cars[idx]} : ${'-'.repeat(forwardCount[idx])}`);
  }
  Console.print(
    `최종 우승자: ${cars.filter((_, idx) => winnerIdx.includes(idx)).join(',')}`,
  );
};

export default Race;
