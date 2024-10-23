import { MissionUtils } from '@woowacourse/mission-utils';

export const scan = async (question) => {
  return await MissionUtils.Console.readLineAsync(question + '\n');
};
