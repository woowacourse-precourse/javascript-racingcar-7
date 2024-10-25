import { validateError } from '../src/Validate.js';

describe('validate test', () => {
  test('만욱,노미,재걸,동호', () => {
    expect(
      validateError({ car: '만욱,노미,재걸,동호', count: 123123 }),
    ).toThrow('[ERROR] 길이가 5글자를 초과했습니다'); // 두 인자를 전달
  });

  test('두루미,김수한무거북이와 , 123123', () => {
    expect(validateError('123123,123123123')).toBe(true); // 두 인자를 전달
  });
});
