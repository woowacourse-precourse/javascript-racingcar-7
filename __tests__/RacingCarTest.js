import { mockRandoms } from './utils/TestUtil.js';
import RacingCars from '../src/models/RacingCars.js';

describe('RacingCars 클래스 테스트', () => {
  test('(검증받은)자동차 이름 배열을 이용하여 RacingCars 객체를 생성합니다.', () => {
    const carNameList = ['Harry', 'Seop', 'Park'];
    const racingCars = new RacingCars(carNameList);

    expect(racingCars.getCars().length).toBe(3);
    expect(racingCars.getCars().map(car => car.getName())).toStrictEqual(
      carNameList,
    );
  });

  describe('랜덤 값에 따른 자동차의 전진 여부 테스트', () => {
    test('랜덤 값이 4 이상일 때 각 자동차가 전진합니다.', () => {
      const carNameList = ['harry', 'seop'];
      const racingCars = new RacingCars(carNameList);

      mockRandoms([4, 5]);
      racingCars.moveCarsInRound();

      expect(racingCars.getCars()[0].getPosition()).toBe(1);
      expect(racingCars.getCars()[1].getPosition()).toBe(1);
    });

    test('랜덤 값이 4 미만일 때 각 자동차가 전진하지 않습니다.', () => {
      const carNameList = ['ji', 'seop'];
      const racingCars = new RacingCars(carNameList);

      mockRandoms([3, 0]);
      racingCars.moveCarsInRound();

      expect(racingCars.getCars()[0].getPosition()).toBe(0);
      expect(racingCars.getCars()[1].getPosition()).toBe(0);
    });
  });

  describe('시도 횟수가 2인 경우, 각 자동차의 전진 여부 테스트', () => {
    test('첫 시도에서 첫 번째 자동차만 전진, 두 번째 시도에서도 첫 번째 자동차만 전진하는지 테스트', () => {
      const carNameList = ['harry', 'seop'];
      const racingCars = new RacingCars(carNameList);

      mockRandoms([4, 3]);
      racingCars.moveCarsInRound();

      expect(racingCars.getCars()[0].getPosition()).toBe(1);
      expect(racingCars.getCars()[1].getPosition()).toBe(0);

      mockRandoms([7, 0]);
      racingCars.moveCarsInRound();

      expect(racingCars.getCars()[0].getPosition()).toBe(2);
      expect(racingCars.getCars()[1].getPosition()).toBe(0);
    });
  });
});
