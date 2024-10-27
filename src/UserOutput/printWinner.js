import { MissionUtils } from '@woowacourse/mission-utils';

const printWinner = (results) => {
  const maxDistance = Math.max(...results.map((result) => result.distance));
  const winners = results
    .filter((result) => result.distance === maxDistance)
    .map((result) => result.name);

  MissionUtils.Console.print(`최종 우승자 : ${winners.join(', ')}`);
};

export default printWinner;
