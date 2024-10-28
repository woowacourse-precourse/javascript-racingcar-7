import carHandler from '../src/handler/carHandler.js';

const EXPEXTED_ERROR = {
  LONG_NAME: '[ERROR] 자동차 이름은 5글자 이하만 가능합니다.',
  TOO_SHORT_NAME: '[ERROR] 공백은 이름이 될 수 없습니다.',
  INCLUDE_BLANK: '[ERROR] 이름에는 공백이 포함될 수 없습니다.',
  DUPLICATED_NAME: '[ERROR] 중복된 이름이 존재합니다.',
};

describe('자동차 입력값 테스트', () => {
  const CORRECT_CASE = ['a,b,c', 'hi,im,sumin', '1,2,3'];

  test.each(CORRECT_CASE)('carHandler 정상 입력 테스트', async (names) => {
    await expect(carHandler(names.split(','))).toBeUndefined();
  });

  const ERROR_CASE = [
    ['a,b,abcdef', EXPEXTED_ERROR.LONG_NAME],
    ['a,,b', EXPEXTED_ERROR.TOO_SHORT_NAME],
    ['a,b, c', EXPEXTED_ERROR.INCLUDE_BLANK],
    ['a,b,b', EXPEXTED_ERROR.DUPLICATED_NAME],
  ];

  test.each(ERROR_CASE)(
    'carHandler 예외 케이스 테스트',
    async (names, errorMessage) => {
      return await expect(() => carHandler(names.split(','))).toThrow(errorMessage);
    }
  );
});
