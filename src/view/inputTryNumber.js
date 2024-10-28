import { MissionUtils } from '@woowacourse/mission-utils';

export const inputTryNumber = async () => {
  const tryCount =
    await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요? \n');

  return tryCount;
};
