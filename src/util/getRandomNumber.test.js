import { getRandomNumber } from './getRandomNumber';

test('0 ~ 9사이 랜덤값 출력', () => {
  for (let i = 0; i < 5; i++) {
    const number = getRandomNumber();
    expect(number).toBeGreaterThanOrEqual(0);
    expect(number).toBeLessThanOrEqual(9);
  }
});
