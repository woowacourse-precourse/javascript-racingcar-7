import { Console, Random } from '@woowacourse/mission-utils';
import Racing from '../src/Racing.js';
import Car from '../src/Car.js';

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();

  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    Random.pickNumberInRange,
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('Racing 메서드 테스트', () => {
  test('play 메서드에서 driving 메서드가 매 라운드 실행되는지 테스트', () => {
    const TOTAL_ROUNDS = 3;
    const CAR_NAME = 'woowa';

    const drivingSpy = jest.spyOn(Car.prototype, 'driving');

    const car = new Car(CAR_NAME);
    const racing = new Racing(TOTAL_ROUNDS, [car]);
    racing.play();

    expect(drivingSpy).toHaveBeenCalledTimes(TOTAL_ROUNDS);
  });
});
