import UserInputHandler from '../src/UserInputHandler.js';
import {
  ERROR_MESSAGE,
  MAX_CAR_COUNT,
  MAX_TRY_COUNT,
} from '../src/constant.js';
import { mockQuestions } from './ApplicationTest.js';

describe('UserInputHandler 입력 처리 테스트', () => {
  let userInputHandler;

  beforeEach(() => {
    userInputHandler = new UserInputHandler();
  });

  test('자동차 이름 입력을 정상적으로 처리', async () => {
    // given
    const inputs = ['pobi, woni, crong'];
    mockQuestions(inputs);

    // when
    const carNames = await userInputHandler.getCarNames();

    // then
    expect(carNames).toEqual(['pobi', 'woni', 'crong']);
  });

  test('자동차 이름 입력에서 쉼표가 없는 경우 예외 처리', async () => {
    // given
    const inputs = ['pobi'];
    mockQuestions(inputs);

    // then
    await expect(userInputHandler.getCarNames()).rejects.toThrow(
      ERROR_MESSAGE.MIN_CAR_COUNT,
    );
  });

  test('중복된 자동차 이름이 입력될 경우 예외 처리', async () => {
    // given
    const inputs = ['pobi,pobi,woni'];
    mockQuestions(inputs);

    // then
    await expect(userInputHandler.getCarNames()).rejects.toThrow(
      ERROR_MESSAGE.DUPLICATED_CAR_NAME,
    );
  });

  test(`자동차 이름 개수가 ${MAX_CAR_COUNT}개를 초과할 경우 예외 처리`, async () => {
    // given
    const inputs = [
      Array.from(Array(MAX_CAR_COUNT + 1), (_, index) => `car${index}`).join(
        ',',
      ),
    ];
    mockQuestions(inputs);

    // then
    await expect(userInputHandler.getCarNames()).rejects.toThrow(
      ERROR_MESSAGE.MAX_CAR_COUNT,
    );
  });

  test('시도 횟수 입력을 정상적으로 처리', async () => {
    // given
    const inputs = ['3'];
    mockQuestions(inputs);

    // when
    const tryCount = await userInputHandler.getTryCount();

    // then
    expect(tryCount).toBe(3);
  });

  test('시도 횟수 입력이 숫자가 아닌 경우 예외 처리', async () => {
    // given
    const inputs = ['three'];
    mockQuestions(inputs);

    // then
    await expect(userInputHandler.getTryCount()).rejects.toThrow(
      ERROR_MESSAGE.INVALID_TRY_COUNT_TYPE,
    );
  });

  test('시도 횟수 입력이 양수가 아닌 경우 예외 처리', async () => {
    // given
    const inputs = ['-1'];
    mockQuestions(inputs);

    // then
    await expect(userInputHandler.getTryCount()).rejects.toThrow(
      ERROR_MESSAGE.MIN_TRY_COUNT,
    );
  });

  test('시도 횟수 입력이 정수가 아닌 경우 예외 처리', async () => {
    // given
    const inputs = ['1.2'];
    mockQuestions(inputs);

    // then
    await expect(userInputHandler.getTryCount()).rejects.toThrow(
      ERROR_MESSAGE.MIN_TRY_COUNT,
    );
  });

  test(`시도 횟수 입력이 ${MAX_TRY_COUNT}을 초과할 경우 예외 처리`, async () => {
    // given
    const inputs = [`${MAX_TRY_COUNT + 1}`];
    mockQuestions(inputs);

    // then
    await expect(userInputHandler.getTryCount()).rejects.toThrow(
      ERROR_MESSAGE.MAX_TRY_COUNT,
    );
  });
});
