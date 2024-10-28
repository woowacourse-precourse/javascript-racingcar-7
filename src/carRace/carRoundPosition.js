import { Console, Random } from '@woowacourse/mission-utils';

export default function carRoundPosition(raceResults) {
  raceResults.forEach((car) => {
    const randomNum = Random.pickNumberInRange(0, 9);
    if (randomNum >= 4) {
      car.position += 1;
    }
  });

  printRaceRound(raceResults);
}

function printRaceRound(raceResults) {
  raceResults.forEach((car) => {
    Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
  });
  Console.print('');
}
