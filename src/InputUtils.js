import { MissionUtils } from '@woowacourse/mission-utils';

export async function getCarName() {
  return await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
}

export function splitCarName(names) {
  return names.split(',').filter((name) => name !== '');
}

export async function getAttemptCount() {
  return await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
}

export function validateCarNameLength(names) {
  names.forEach((name) => {
    if (name.length > 5) {
      throw new Error('[ERROR]');
    }
  });
}
