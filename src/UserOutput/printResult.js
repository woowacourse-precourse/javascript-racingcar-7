import { MissionUtils } from '@woowacourse/mission-utils';

const printResult = (name, distance) => {
  const track = '-'.repeat(distance);
  MissionUtils.Console.print(`${name} : ${track}`);
};

export default printResult;
