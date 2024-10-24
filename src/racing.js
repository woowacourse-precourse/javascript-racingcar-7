import { Console } from '@woowacourse/mission-utils';
import { MissionUtils } from '@woowacourse/mission-utils';

export function progressRacing(carList) {
  const progressResult = [];

  carList.forEach (_ => {
    const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNum >= 4) {
      progressResult.push(1);
    }
    else {
      progressResult.push(0);
    }
  })
  return progressResult;
}

export function printRacingStatus(carList, racingStatus) {
  let i = 0;
  while (i < carList.length) {
    Console.print(carList[i] + ' : ' + '-'.repeat(racingStatus[i]));
    i ++;
  }
  Console.print('');
}
