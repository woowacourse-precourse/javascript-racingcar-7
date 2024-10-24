import { MissionUtils } from '@woowacourse/mission-utils';

export async function getCarName() {
  return await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
}

export function splitCarName(name) {
  return name.split(',');
}
