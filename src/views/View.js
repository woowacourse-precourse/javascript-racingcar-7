import { MissionUtils } from '@woowacourse/mission-utils';

export function getUserInput() {
  return MissionUtils.Console.readLineAsync(''); // promist 반환
}
