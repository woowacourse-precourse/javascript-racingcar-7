import { MissionUtils } from '@woowacourse/mission-utils';

import { validateSeparator } from '../../model/model.js';

import { INPUT, OTHERS } from '../../constants/constants.js';

export const inputRacingCarName = async () => {
  const inputCarName = await MissionUtils.Console.readLineAsync(INPUT.CAR_NAME);

  validateSeparator(inputCarName);

  const cars = inputCarName.split(OTHERS.COMMA);

  return cars;
};
