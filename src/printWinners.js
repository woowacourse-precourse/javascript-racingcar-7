import { Console } from '@woowacourse/mission-utils';

const printWinners = function printWinners(cars) {
  const maxDistance = cars.reduce((maxDistance, car) => {
    return Math.max(maxDistance, car.getDistance());
  }, 0);

  const winnerCars = carArray.filter(
    (car) => car.getDistance() === maxDistance
  );

  const winnerNames = winners.map((winner) => winner.getName()).join(',');
  Console.print(`최종 우승자 : ${winnerNames}`);
};

export default printWinners;
