import { Console } from '@woowacourse/mission-utils';

const findWinners = (cars) => {
  const maxDistance = cars.reduce((maxDistance, car) => {
    return Math.max(maxDistance, car.getDistance());
  }, 0);

  return cars.filter((car) => car.getDistance() === maxDistance);
};

const printWinners = (cars) => {
  const winnerCars = findWinners(cars);

  const winnerNames = winnerCars.map((winner) => winner.getName()).join(',');
  Console.print(`최종 우승자 : ${winnerNames}`);
};

export default printWinners;
