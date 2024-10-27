import splitAndTrimCarName from '../src/services/carNamesTrimmer.js';

describe('자동차 이름 입력 받기', () => {
  test('쉼표로 구분된 자동차 이름을 배열로 반환한다.', async () => {
    const inputs = 'pobi, jinny';
    expect(splitAndTrimCarName(inputs)).toEqual(['pobi', 'jinny']);
  });
});
