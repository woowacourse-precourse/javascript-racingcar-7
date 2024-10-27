import splitAndTrimCarName from '../src/services/carNamesTrimmer.js';
import { validateNotEmpty } from '../src/validations/carNamesValidator.js';

describe('자동차 이름 입력 받기', () => {
  test('쉼표로 구분된 자동차 이름을 배열로 반환한다.', async () => {
    const inputs = 'pobi, jinny';
    expect(splitAndTrimCarName(inputs)).toEqual(['pobi', 'jinny']);
  });

  test('쉼표(,) 뒤 띄어쓰기는 이름에 포함되지 않는다.', async () => {
    const inputs = 'pobi , jinny';
    expect(splitAndTrimCarName(inputs)).toEqual(['pobi', 'jinny']);
  });

  test('빈 입력값은 에러를 던진다.', () => {
    const inputs = '';
    expect(() => validateNotEmpty(inputs)).toThrow('[ERROR]');
  });
});
