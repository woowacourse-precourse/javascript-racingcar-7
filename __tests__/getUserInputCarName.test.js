import { getUserInputCarName } from '../src/App';

describe('getUserInputCarName', () => {
  test('차 이름 추가', () => {
    expect(getUserInputCarName([pobi, woni, jun]).toEqual([pobi, woni, jun]));
  });

  test('쉼표가 아닌 구분자', () => {
    expect(getUserInputCarName([pobi | woni | jun]).toThrow('[ERROR]'));
  });

  test('5자를 초과하는 자동차 이름', () => {
    expect(getUserInputCarName([djfaksd, did]).toThrow('[ERROR]'));
  });
});
