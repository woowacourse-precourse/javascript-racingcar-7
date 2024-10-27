import { validateInput } from '../src/parsers/Validate.js'; // default export를 중괄호 없이 가져오기
import { ERROR_MESSAGE } from '../src/const/index.js';

describe('validate test', () => {
  test('만욱,노미,재걸,동호', () => {
    expect(() => {
      validateInput({ car: ['만욱', '노미', '재걸', '동호'], count: 123123 });
    }).toThrow(ERROR_MESSAGE.COUNT_ERROR);
  });

  test('두루미,김수한무거북이와, 123123', () => {
    expect(() => {
      validateInput({ car: [123, 123, 12312123], count: 31 });
    }).toThrow(ERROR_MESSAGE.LENGTH_ERROR);
  });
});
