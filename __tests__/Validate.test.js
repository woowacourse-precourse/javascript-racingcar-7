import { Validate } from '../src/Validate';

const validate = new Validate();
// add 함수 테스트 코드 정의
describe('add test', () => {
  test('만욱,노미,재걸,동호', () => {
    expect(validate.validater('만욱,노미,재걸,동호')).toBe(false); // 두 인자를 전달
  });

  test('123123,123123123', () => {
    expect(validate.validater('123123,123123123')).toBe(true); // 두 인자를 전달
  });
});
