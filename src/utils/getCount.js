import { Console } from "@woowacourse/mission-utils";

export async function getCount() {
  try {
    let count = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    return count;
  } catch (error) {
    throw new Error('[ERROR]');
  }
}