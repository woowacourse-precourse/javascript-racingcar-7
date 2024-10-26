import { MissionUtils } from '@woowacourse/mission-utils';

export async function getCarName() {
  try {
    return await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
  } catch (error) {
    throw new Error('[ERROR]');
  }
}

export function splitCarName(names) {
  return names.split(',').filter((name) => name !== '');
}

export async function getAttemptCount() {
  try {
    return await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  } catch (error) {
    throw new Error('[ERROR]');
  }
}

export function validateCarNameLength(names) {
  names.forEach((name) => {
    if (name.length > 5) {
      throw new Error('[ERROR]');
    }
  });
}

export function validateCarsLength(names) {
  if (names.length === 0) {
    throw new Error('[ERROR]');
  }
}

export function validateCarNames(names) {
  validateCarNameLength(names);
  validateCarsLength(names);
}

export function validateAttemptCount(attemptCount) {
  if (attemptCount < 1) {
    throw new Error('[ERROR]');
  }
}
