import { Console } from '@woowacourse/mission-utils';

export const printCurrentRound = (raceResults) => {
  raceResults.forEach((car) => {
    Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
  });
  Console.print('');
};

export const printWinners = (raceResults) => {
  const maxPosition = Math.max(...raceResults.map((car) => car.position));
  const winners = raceResults
    .filter((car) => car.position === maxPosition)
    .map((car) => car.name);
  Console.print(`최종 우승자 : ${winners.join(', ')}`);
};
