import { Console } from '@woowacourse/mission-utils';

export function getWinner(carList, racingStatus) {
  const maxDist = Math.max(...racingStatus);
  const winnerList = []

  for (const idx of Array(carList.length).keys()) {
    if (racingStatus[idx] === maxDist) {
      winnerList.push(carList[idx]);
    }
  }
  return winnerList;
}