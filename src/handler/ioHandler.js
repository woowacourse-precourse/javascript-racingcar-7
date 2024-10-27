import { MissionUtils } from '@woowacourse/mission-utils';

export const input = (message) => MissionUtils.Console.readLineAsync(message);

export const print = (message) => MissionUtils.Console.print(message);
