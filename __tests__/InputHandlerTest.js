import { getCarNames, getAttemptCount } from '../src/InputHandler';
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const testValidInput = async (inputs, expected) => {
  mockQuestions(inputs);
  const result = await testFunction();
  expect(result).toEqual(expected);
};

const testInvalidInput = async (inputs, errorMessage) => {
  mockQuestions(inputs);
  await expect(testFunction()).rejects.toThrow(errorMessage);
};

let testFunction;

describe('자동차 이름 입력 테스트', () => {
  beforeEach(() => {
    testFunction = getCarNames;
  });

  test('자동차 이름 입력 정상 처리', async () => {
    await testValidInput(['pobi,woni,jun'], ['pobi', 'woni', 'jun']);
  });

  test('자동차 이름 입력 정상 처리 - 이름의 앞 뒤 공백 제거', async () => {
    await testValidInput(['pobi, woni , jun'], ['pobi', 'woni', 'jun']);
  });

  test('자동차 이름에 숫자가 포함된 경우 정상 처리', async () => {
    await testValidInput(['pobi1,woni2'], ['pobi1', 'woni2']);
  });

  test('자동차 이름에 특수 문자가 포함된 경우 정상 처리', async () => {
    await testValidInput(['pobi!,woni@'], ['pobi!', 'woni@']);
  });

  test('자동차 이름이 하나만 입력된 경우 정상 처리', async () => {
    await testValidInput(['pobi'], ['pobi']);
  });

  test('자동차가 10대인 경우 정상 처리', async () => {
    await testValidInput(['a,b,c,d,e,f,g,h,i,j'], ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
  });

  test('자동차 이름에 공백이 포함된 경우 에러 발생', async () => {
    await testInvalidInput(['pobi, ,jun'], '[ERROR] 자동차 이름으로 공백은 허용되지 않습니다.');
  });

  test('자동차 이름이 입력되지 않은 경우 에러 발생', async () => {
    await testInvalidInput([''], '[ERROR] 자동차 이름으로 공백은 허용되지 않습니다.');
  });

  test('쉼표만 입력된 경우 에러 발생', async () => {
    await testInvalidInput([',,,,'], '[ERROR] 자동차 이름으로 공백은 허용되지 않습니다.');
  });

  test('5자를 초과하는 자동차 이름이 있는 경우 에러 발생', async () => {
    await testInvalidInput(['pobiii, jun'], '[ERROR] 모든 자동차 이름은 5자 이하여야 합니다.');
  });

  test('자동차가 10대를 초과하는 경우 에러 발생', async () => {
    await testInvalidInput(['a,b,c,d,e,f,g,h,i,j,k'], '[ERROR] 자동차는 최대 10대까지 등록 가능합니다.');
  });

  test('중복되는 자동차 이름이 존재하는 경우 에러 발생', async () => {
    await testInvalidInput(['pobi,woni,pobi'], '[ERROR] 중복되는 자동차 이름이 있습니다.');
  });
});

describe('시도 횟수 입력 테스트', () => {
  beforeEach(() => {
    testFunction = getAttemptCount;
  });

  test('시도 횟수 입력 정상 처리', async () => {
    await testValidInput(['5'], 5);
  });

  test('시도 횟수 입력 정상 처리 - 앞 뒤 공백 존재', async () => {
    await testValidInput(['    5 '], 5);
  });

  test('시도 횟수가 100인 경우 정상 처리', async () => {
    await testValidInput(['100'], 100);
  });

  test('공백만 입력된 경우 에러 발생', async () => {
    await testInvalidInput(['   '], '[ERROR] 시도 횟수는 1 이상의 정수여야 합니다.');
  });

  test('0이 입력된 경우 에러 발생', async () => {
    await testInvalidInput(['0'], '[ERROR] 시도 횟수는 1 이상의 정수여야 합니다.');
  });

  test('음의 정수가 입력된 경우 에러 발생', async () => {
    await testInvalidInput(['-1'], '[ERROR] 시도 횟수는 1 이상의 정수여야 합니다.');
  });

  test('음의 실수가 입력된 경우 에러 발생', async () => {
    await testInvalidInput(['-1.1'], '[ERROR] 시도 횟수는 1 이상의 정수여야 합니다.');
  });

  test('양의 실수가 입력된 경우 에러 발생', async () => {
    await testInvalidInput(['2.1'], '[ERROR] 시도 횟수는 실수가 될 수 없습니다.');
  });

  test('숫자가 아닌 값이 입력된 경우 에러 발생', async () => {
    await testInvalidInput(['!'], '[ERROR] 시도 횟수는 숫자여야 합니다.');
  });

  test('시도 횟수가 100을 초과하는 경우 에러 발생', async () => {
    await testInvalidInput(['101'], '[ERROR] 시도 횟수는 최대 100회까지 가능합니다.');
  });
});
