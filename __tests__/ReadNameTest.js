import { MissionUtils } from "@woowacourse/mission-utils";
import { ReadName } from "../src/handler/ReadName.js";
import { INPUT_ERROR_MESSAGE, SEPARATOR_ERROR_MESSAGE } from "../src/constants/Messages.js";

const mockReadLineAsync = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(input)
  })
}

describe('ReadName Class 테스트', () => {
  test('이름으로 공백을 입력한 경우 에러를 던진다.', () => {
    const emptyInput = '';
    mockReadLineAsync(emptyInput);
    const input = new ReadName().read();
    expect(input).rejects.toThrow(INPUT_ERROR_MESSAGE);
  })

  test('이름 입력에 문자열 구분자(,)가 포함 되어있지 않으면 에러를 던진다.', () => {
    const inValidInput = 'name1';
    mockReadLineAsync(inValidInput);
    const input = new ReadName().read();
    expect(input).rejects.toThrow(SEPARATOR_ERROR_MESSAGE);
  })
})
