import { Console } from '@woowacourse/mission-utils';

export async function getValidatedCarNames() {
  const input = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");

  if (!input || input.split(',').some(name => name.trim().length === 0 || name.trim().length > 5)) {
    throw new Error("[ERROR] 자동차 이름은 빈 문자열이 아니어야 하며, 5글자 이하이어야 합니다.");
  }

  return input.split(',').map(name => name.trim());
}

export async function getValidatedIteration() {
  const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  const iteration = Number(input);

  if (!Number.isInteger(iteration) || iteration <= 0) {
    throw new Error("[ERROR] 시도할 횟수는 1 이상의 정수여야 합니다.");
  }

  return iteration;
}
