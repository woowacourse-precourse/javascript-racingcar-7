import { MissionUtils } from '@woowacourse/mission-utils';

function getAttemptsInput() {
  const attemptsinput = MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

  return attemptsinput;
}

export default getAttemptsInput;
