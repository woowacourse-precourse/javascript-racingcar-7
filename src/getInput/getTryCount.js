import { Console } from '@woowacourse/mission-utils';

export async function getTryCount() {
  const TRY_COUNT = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  return TRY_COUNT;
}
