import { MissionUtils } from "@woowacourse/mission-utils";
import { ReadName } from "../src/handler/ReadName.js";
import { ReadAttemptCount } from "../src/handler/ReadAttemptCount.js";
import { ATTEMPT_COUNT_ERROR_MESSAGE, INPUT_ERROR_MESSAGE } from "../src/constants/Messages.js";

const mockReadLineAsync = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(input)
  })
}

describe('InputHandler', () => {
  test('ReadName Class 테스트: 이름으로 공백을 입력한 경우 에러를 던진다.', () => {
    const emptyInput = '';
    mockReadLineAsync(emptyInput);
    const input = new ReadName().read();
    expect(input).rejects.toThrow(INPUT_ERROR_MESSAGE);
  })

  test('ReadAttemptCount Class 테스트: 시도횟수로 공백을 입력한 경우 에러를 던진다.', () => {
    const emptyInput = '';
    mockReadLineAsync(emptyInput);
    const input = new ReadAttemptCount().read();
    expect(input).rejects.toThrow(ATTEMPT_COUNT_ERROR_MESSAGE);
  })
})
