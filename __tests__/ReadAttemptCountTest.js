import { MissionUtils } from "@woowacourse/mission-utils";
import { ReadAttemptCount } from "../src/handler/ReadAttemptCount.js";
import { ATTEMPT_COUNT_ERROR_MESSAGE, NAN_ERROR_MESSAGE } from "../src/constants/Messages.js";
import { MIN_ATTEMPT_COUNT } from "../src/constants/Constants.js";

const mockReadLineAsync = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(input)
  })
}

describe("ReadAttemptCount Class 테스트", () => {
  test('시도 횟수로 공백을 입력한 경우 에러를 던진다.', () => {
    const emptyInput = '';
    mockReadLineAsync(emptyInput);
    const input = new ReadAttemptCount().read();
    expect(input).rejects.toThrow(ATTEMPT_COUNT_ERROR_MESSAGE);
  })

  test('시도 횟수가 숫자가 아니면 에러를 던진다.', () => {
    const NaNAttemptCount = 'asdf';
    mockReadLineAsync(NaNAttemptCount);
    const input = new ReadAttemptCount().read();
    expect(input).rejects.toThrow(NAN_ERROR_MESSAGE);
  })

  test('최소 시도 횟수 미만인 값을 입력하면 에러를 던진다.', () => {
    const underMinAttemptCount = `${MIN_ATTEMPT_COUNT - 1}`;
    mockReadLineAsync(underMinAttemptCount);
    const input = new ReadAttemptCount().read();
    expect(input).rejects.toThrow(ATTEMPT_COUNT_ERROR_MESSAGE);
  })
})