import { Console } from '@woowacourse/mission-utils';

const displayRacing = results => {
  results.forEach(car => {
    Console.print(`${car.name} : ${car.position}`);
  });
  Console.print('');
};

export default displayRacing;
