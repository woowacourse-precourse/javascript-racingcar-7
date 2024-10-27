const { Random } = require('@woowacourse/mission-utils');
import { CarModel } from '../src/model/CarModel.js';

describe('CarModel 클래스 테스트', () => {
  let carModel;
  beforeEach(() => {
    carModel = new CarModel('pobi');
  });

  test('자동차 이름 가져오기', () => {
    expect(carModel.getName()).toEqual('pobi');
  });

  test('전진 횟수 가져오기', () => {
    expect(carModel.getAdvancedCount()).toEqual(0);
  });

  test('랜덤 숫자가 4이상이면 전진', () => {
    Random.pickNumberInRange = jest.fn();
    // 4이상인 경우 이동
    Random.pickNumberInRange.mockReturnValue(4);

    carModel.advanceOnRandom();

    expect(carModel.getAdvancedCount()).toEqual(1);

    // 4이하인 경우 이동하지 않음
    Random.pickNumberInRange.mockReturnValue(2);

    carModel.advanceOnRandom();

    expect(carModel.getAdvancedCount()).toEqual(1);
  });
});
