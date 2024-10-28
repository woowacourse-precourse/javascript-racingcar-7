import { Console } from '@woowacourse/mission-utils';

export async function getCarNames() {
  const userInput = await Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분):'
  );

  let carNames = userInput
    .split(',')
    .map((name) => name.trim())
    .filter((name) => name.length > 0);

  carNames = Array.from(new Set(carNames)); // 중복 제거

  return carNames;
}

export async function getMoveCount() {
  const userInput = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
  const count = parseInt(userInput, 10);

  return count;
}
