import Car from '../../src/car/Car';
import getRandomNum from '../../src/utils/getRandomNum';
import { MIN_MOVABLE_NUM } from '../../src/constants/constants';

jest.mock('../../src/utils/getRandomNum.js');

describe.each([
  [`랜덤 값이 ${MIN_MOVABLE_NUM} 이상일 때 전진`, 9, 11],
  [`랜덤 값이 ${MIN_MOVABLE_NUM} 이상일 때 전진`, 4, 11],
  [`랜덤 값이 ${MIN_MOVABLE_NUM} 미만일 때 정지`, 3, 10],
  [`랜덤 값이 ${MIN_MOVABLE_NUM} 미만일 때 정지`, 0, 10],
])('%s', (_, randomNum, expected) => {
  let car;
  beforeEach(() => {
    car = new Car('moon', 10);
    getRandomNum.mockReturnValue(randomNum); // getRandomNum이 randomNum을 반환하도록 설정
  });

  test(`${randomNum}일 때 moveCount : ${expected}`, () => {
    car.move();
    if (randomNum >= MIN_MOVABLE_NUM) {
      expect(car.getMoveCount()).toBe(expected);
    } else {
      expect(car.getMoveCount()).toBe(expected);
    }
  });
});
