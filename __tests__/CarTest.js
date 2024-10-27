import Car from '../src/Car.js';
import { VALUES } from '../src/constants/values.js';
import { mockRandoms } from '../src/utils/testUtils.js';

describe('Car 클래스 테스트', () => {
  beforeEach(() => {
    Car.clearInstances();
  });
  test.each([
    {
      carNames: ['a', 'b'],
      randomValues: [VALUES.moveIfOrMore, VALUES.moveIfOrMore - 1],
      result: [
        {
          name: 'a',
          progress: 1,
        },
        {
          name: 'b',
          progress: 0,
        },
      ],
    },
    {
      carNames: ['a', 'b'],
      randomValues: [VALUES.moveIfOrMore, VALUES.moveIfOrMore],
      result: [
        {
          name: 'a',
          progress: 1,
        },
        {
          name: 'b',
          progress: 1,
        },
      ],
    },
  ])('자동차 이동 결과를 반환하는 기능 테스트', ({ carNames, randomValues, result }) => {
    mockRandoms(randomValues);
    Car.addCarInstances(carNames);
    const executeResult = Car.executeAllCars();
    expect(executeResult).toEqual(result);
  });
  test.each([
    {
      carNames: ['a', 'b'],
      randomValues: [VALUES.moveIfOrMore, VALUES.moveIfOrMore - 1],
      winner: ['a'],
    },
    {
      carNames: ['a', 'b'],
      randomValues: [VALUES.moveIfOrMore, VALUES.moveIfOrMore],
      winner: ['a', 'b'],
    },
  ])('우승한 자동차를 구하는 기능 테스트', ({ carNames, randomValues, winner }) => {
    Car.addCarInstances(carNames);
    mockRandoms(randomValues);
    Car.executeAllCars();
    expect(Car.getWinner()).toEqual(winner);
  });
});
