import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const testTamplate = (query, inputs) => {
  test(query, async () => {
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
};

describe('예외 테스트', () => {
  testTamplate('이름 없음 예외', ['']);
  testTamplate('빈 이름 예외', ['pobi,,wone']);
  testTamplate('한 명 예외', ['pobi']);
  testTamplate('5자 초과 이름 예외', ['pobidia,woni']);
  testTamplate('이름 중복 예외', ['pobi,pobi,woni']);
  testTamplate('0회 시도 예외', ['pobi,woni', 0]);
  testTamplate('미입력 시도 예외', ['pobi,woni', '']);
  testTamplate('최대 시도 횟수 초과 예외', ['pobi,woni', 1234567890123456]);
  testTamplate('문자 시도 입력 예외', ['pobi,woni', 'x']);
  testTamplate('소수 시도 입력 예외', ['pobi,woni', '3.5']);
  testTamplate('수식 시도 입력 예외', ['pobi,woni', '3+3']);
  testTamplate('공백 시도 입력 예외', ['pobi,woni', ' ']);
  testTamplate('빈 문자열 시도 입력 예외', ['pobi,woni', '']);
});
