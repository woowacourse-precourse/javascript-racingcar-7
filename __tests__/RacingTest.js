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
  test('play 메서드 테스트', () => {
    const MOVING_FORWARD = 5;
    const STOP = 2;
    const TOTAL_ROUNDS = 3;
    const CAR_NAME = 'woowa';
    const results = ['woowa : -', 'woowa : --', 'woowa : --'];
    const logSpy = getLogSpy();

    mockRandoms([MOVING_FORWARD, MOVING_FORWARD, STOP]);

    const car = new Car(CAR_NAME);
    const racing = new Racing(TOTAL_ROUNDS, [car]);

    racing.play();

    results.forEach((result, index) => {
      expect(logSpy).toHaveBeenNthCalledWith(
        index + 1,
        expect.stringContaining(result),
      );
    });
  });
});
