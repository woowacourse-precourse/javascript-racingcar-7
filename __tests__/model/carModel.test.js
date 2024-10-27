import { Random } from '@woowacourse/mission-utils';
import CarModel from '../../src/model/carModel.js';

// Random 모듈을 테스트에서 제어하기 위해 mock 처리
jest.mock('@woowacourse/mission-utils', () => ({
  Random: {
    pickNumberInRange: jest.fn(),
  },
}));

describe('carModel 테스트', () => {
  let carModel;
  beforeEach(() => {
    carModel = new CarModel('wook');
  });

  test('초기화 시 이름과 위치를 유지한다.', () => {
    // 이름 일치 테스트
    expect(carModel.getName()).toBe('wook');
    expect(carModel.getPosition()).toBe(0);
  });

  test('move() 호출 시 4이상인 경우 위치가 증가한다.', () => {
    Random.pickNumberInRange.mockReturnValue(4);
    carModel.move();
    expect(carModel.getPosition()).toBe(1);
  });

  test('move() 호출 시 3 이하인 경우 위치가 그대로 유지된다', () => {
    const car = new CarModel('TestCar');
    Random.pickNumberInRange.mockReturnValue(3);
    car.move();
    expect(car.getPosition()).toBe(0);
  });

  test('getPositionString() 호출 시 현재 위치에 맞는 "-" 문자열을 반환한다', () => {
    const car = new CarModel('TestCar');
    Random.pickNumberInRange.mockReturnValue(4);
    car.move();
    car.move();
    expect(car.getPositionString()).toBe('--');
  });
});
