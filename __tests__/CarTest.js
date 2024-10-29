import Car from '../src/Car.js';
import { VALUES } from '../src/constants/values.js';
import { mockRandoms } from '../src/utils/testUtils.js';

describe('Car 클래스 테스트', () => {
  test.each([
    {
      carName: 'a',
      randomValues: [VALUES.moveIfOrMore, VALUES.moveIfOrMore - 1],
      expectedResult: {
        name: 'a',
        progress: 1,
      },
    },
    {
      carName: 'a',
      randomValues: [VALUES.moveIfOrMore, VALUES.moveIfOrMore],
      expectedResult: {
        name: 'a',
        progress: 2,
      },
    },
  ])('자동차 이동 결과를 반환하는 기능 테스트', ({ carName, randomValues, expectedResult }) => {
    // when
    mockRandoms(randomValues);
    const car = new Car(carName);
    for (let i = 0; i < randomValues.length; i += 1) {
      car.move();
    }
    const result = car.getState();

    // then
    expect(result).toEqual(expectedResult);
  });
});
