import { ReadLine } from "./ReadLine.js";

const INPUT_ATTEMPT_COUNT_MESSAGE = '시도할 횟수는 몇 회인가요?';

export class InputAttemptCount {
  async read() {
    return await new ReadLine().readInput(INPUT_ATTEMPT_COUNT_MESSAGE);
  }
}
