import parse from '../../../src/application/utils/parse.js';

describe('parse function 테스트', () => {
  test('","를 기준으로 잘 구분 되고 trim 되는 지에 대한 확인', () => {
    // given
    const testCases = [
      { input: 'car1,car2,car3', expected: ['car1', 'car2', 'car3'] },
      { input: ' pobi, woni , jun ', expected: ['pobi', 'woni', 'jun'] },
      { input: ',,,,', expected: ['', '', '', '', ''] },
      { input: 'hello', expected: ['hello'] },
    ];

    testCases.forEach(({ input, expected }) => {
      // when
      const result = parse(input);
      // then
      expect(result).toEqual(expected);
    });
  });
});
