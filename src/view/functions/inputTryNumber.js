import { MissionUtils } from '@woowacourse/mission-utils';

import { INPUT } from '../../constants/constants.js';

export const inputTryNumber = async () => {
  const tryCount = await MissionUtils.Console.readLineAsync(INPUT.RACING_COUNT_INPUT);

  return tryCount;
};
