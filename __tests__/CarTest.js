import Car from '../src/Car';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockCanMoveForward = (results) => {
  Car.canMoveForward = jest.fn();

  results.reduce(
    (acc, result) => acc.mockReturnValueOnce(result),
    Car.canMoveForward,
  );
};

const mockRandoms = (number) => {
  MissionUtils.Random.pickNumberInRange = jest.fn().mockReturnValue(number);
};

describe('자동차 클래스', () => {
  test('자동차 이름 getter 테스트', () => {
    //given
    const car = new Car('pobi');

    //when
    const carName = car.name;

    //then
    expect(carName).toEqual('pobi');
  });

  test.each([
    ['pobi', true],
    [' jun ', true],
    ['pobiwonijun', new Error('[ERROR]')],
  ])('자동차 클래스 생성자에서 이름 유효성 검사 테스트', (inputs, expected) => {
    //given
    const carName = inputs;

    //when
    if (expected instanceof Error) {
      //then
      expect(() => new Car(carName)).toThrow('[ERROR]');
    } else {
      //then
      expect(() => new Car(carName)).not.toThrow();
    }
  });

  test.each([
    [1, false],
    [4, true],
  ])('전진가능여부 메서드 테스트', (inputs, expected) => {
    //given
    mockRandoms(inputs);

    //when, then
    expect(Car.canMoveForward()).toBe(expected);
  });

  test.each([
    [[true, true, false, true], 3],
    [[true, false, false], 1],
  ])('전진횟수 증가 메서드 테스트', (inputs, expected) => {
    //given
    const car = new Car('pobi');
    mockCanMoveForward(inputs);

    //when
    for (let i = 0; i < inputs.length; i++) {
      car.tryMoveForward();
    }

    //then
    expect(car.moveCnt).toBe(expected);
  });
});
