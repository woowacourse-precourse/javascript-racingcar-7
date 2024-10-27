import { Console, Random } from '@woowacourse/mission-utils';

export const runRace = (cars, attempts) => {
  for (let attempt = 0; attempt < attempts; attempt++) {
    updateCarPositions(cars);
    printRaceStatus(cars);
  }
};

const updateCarPositions = (cars) => {
  cars.forEach((car) => {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      car.position += 1;
    }
  });
};

const printRaceStatus = (cars) => {
  cars.forEach((car) => {
    Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
  });
  Console.print('');
};

export const printWinners = (cars) => {
  const maxPosition = Math.max(...cars.map((car) => car.position));
  const winners = cars.filter((car) => car.position === maxPosition);
  const winnerNames = winners.map((car) => car.name).join(', ');
  Console.print(`최종 우승자 : ${winnerNames}`);
};
