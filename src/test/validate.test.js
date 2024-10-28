import { validateInput } from '../parsers/validate.js'; // default export를 중괄호 없이 가져오기
import { ERROR_MESSAGE } from '../const/index.js';

describe('validate test', () => {
  test.each([
    // Count가 10,000 초과인 경우 COUNT_ERROR 발생
    [
      { car: ['만욱', '노미', '재걸', '동호'], count: 123123 },
      ERROR_MESSAGE.COUNT_ERROR,
    ],

    // Car 이름 길이가 5자를 초과하는 경우 LENGTH_ERROR 발생
    [
      { car: ['두루미', '김수한무거북이와'], count: 31 },
      ERROR_MESSAGE.LENGTH_ERROR,
    ],
    [
      { car: ['123', '김수한무거북이와'], count: 31 },
      ERROR_MESSAGE.LENGTH_ERROR,
    ],

    // Count가 음수인 경우 COUNT_MIN_ERROR 발생
    [
      { car: ['짧은이름', '짧은이름2'], count: -1 },
      ERROR_MESSAGE.COUNT_MIN_ERROR,
    ],

    // Car 이름이 중복된 경우 REPEAT_ERROR 발생
    [{ car: ['짧은이름', '짧은이름'], count: 5 }, ERROR_MESSAGE.REPEAT_ERROR],
  ])('validateInput(%o) throws %s', (input, expectedError) => {
    expect(() => {
      validateInput(input);
    }).toThrow(expectedError);
  });
});
