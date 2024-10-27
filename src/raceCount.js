import { Random, Console } from '@woowacourse/mission-utils';

export const updateRaceCount = (raceCount) => {
  for (let i = 0; i < raceCount.length; i++) {
    if (Random.pickNumberInRange(0, 9) >= 4) {
      raceCount[i] += 1;
    }
  }
  return raceCount;
};

const printRaceCount = (count) => '-'.repeat(count);

export const printRaceResults = (carNames, raceCount) => {
  carNames.forEach((name, index) => {
    Console.print(`${name} : ${printRaceCount(raceCount[index])}`);
  });
  Console.print('');
};
