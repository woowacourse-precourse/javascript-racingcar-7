import { MissionUtils } from '@woowacourse/mission-utils';

function printProgress(record) {
  const carNames = Object.keys(record);

  carNames.forEach((carName) => {
    MissionUtils.Console.print(`${carName} : ${'-'.repeat(record[carName])}`);
  });
}

export default printProgress;
