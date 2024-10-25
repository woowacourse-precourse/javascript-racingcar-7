import { CAR_NAME_ERROR_MESSAGE } from '../constants/messages';
import User from '../user/User.js';
import { validateCarName } from './validateCarName';

describe('자동차 이름 유효성 검증', () => {
  /**@type {User} */

  test('공백으로 입력하면 에러를 던진다', async () => {
    expect(() => validateCarName('').toThrow(CAR_NAME_ERROR_MESSAGE.NO_INPUT));
  });

  test('자동차 이름을 5자 이상 입력하면 에러를 던진다', () => {
    expect(() => validateCarName('popeyes')).toThrow(
      CAR_NAME_ERROR_MESSAGE.OUT_OF_RANGE
    );
  });

  test('자동차를 한 대만 입력했을 때 에러를 던진다', () => {
    expect(() => validateCarName('car1')).toThrow(
      CAR_NAME_ERROR_MESSAGE.ONE_CAR_NAME
    );
  });

  test('자동차 이름에 공백을 포함하면 에러를 던진다', () => {
    expect(() => validateCarName('car1,car2 ')).toThrow(
      CAR_NAME_ERROR_MESSAGE.INCLUDE_SPACE
    );
  });

  test('자동차 이름이 중복되면 에러를 던진다', () => {
    expect(() => validateCarName('car1,car1')).toThrow(
      CAR_NAME_ERROR_MESSAGE.DUPLICATE_CAR_NAME
    );
  });
});
