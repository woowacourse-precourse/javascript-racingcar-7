import { Console } from '@woowacourse/mission-utils';

const printWinners = function printWinners(carArray) {
  const maxDistance = carArray.reduce((maxDistance, car) => {
    return Math.max(maxDistance, car.getDistance());
  }, 0);

  const winners = carArray.filter((car) => car.getDistance() === maxDistance);

  const winnerString = winners.map((winner) => winner.getName()).join(',');
  Console.print(`최종 우승자 : ${winnerString}`);
};

export default printWinners;
