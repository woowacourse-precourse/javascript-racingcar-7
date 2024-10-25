import { MissionUtils } from "@woowacourse/mission-utils";
import { ReadName } from "../src/handler/ReadName.js";
import { INPUT_ERROR_MESSAGE } from "../src/constants/Messages.js";

const mockReadLineAsync = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(input)
  })
}

describe('InputHandler', () => {
  test('공백을 입력한 경우 에러를 던진다.', () => {
    const emptyInput = '';
    mockReadLineAsync(emptyInput);
    const input = new ReadName().read();
    expect(input).rejects.toThrow(INPUT_ERROR_MESSAGE);
  })
})
