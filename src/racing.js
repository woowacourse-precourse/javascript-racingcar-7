import { Console, MissionUtils } from '@woowacourse/mission-utils';

export function progressRacing(carList) {
  const progressResult = [];

  carList.forEach (_ => {
    const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
    let flag = 0;

    if (randomNum >= 4) {
      flag = 1;
    }
    progressResult.push(value);
    
  });
  return progressResult;
}

export function printRacingStatus(carList, racingStatus) {
  carList.forEach((car, idx) => {
    Console.print(`${car} : ${'-'.repeat(racingStatus[idx])}`);
  });
  Console.print('');
}