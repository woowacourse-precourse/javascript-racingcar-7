import RacingCars from '../../src/domain/RacingCars.js';

describe('RacingCars 테스트', () => {
  describe('create 메서드 테스트', () => {
    test('정상적으로 RacingCars가 생성되는지 확인', () => {
      // given
      const carNames = ['pobi', 'woni', 'jun'];

      // when
      const racingCars = RacingCars.create(carNames);

      // then
      expect(racingCars.getCarsState()).toEqual([
        { name: 'pobi', moveCount: 0 },
        { name: 'woni', moveCount: 0 },
        { name: 'jun', moveCount: 0 },
      ]);
    });

    test('중복된 이름이 있을 경우 에러가 발생하는지 확인', () => {
      // given
      const duplicateNames = ['pobi', 'woni', 'pobi'];

      // when & then
      expect(() => RacingCars.create(duplicateNames)).toThrow('[ERROR]');
    });
  });

  describe('moveCars 메서드 테스트', () => {
    test('모든 자동차가 이동하는지 확인', () => {
      // given
      const racingCars = RacingCars.create(['pobi', 'woni']);

      // when
      racingCars.moveCars();

      // then
      const carsState = racingCars.getCarsState();
      expect(carsState).toEqual([
        { name: 'pobi', moveCount: 1 },
        { name: 'woni', moveCount: 1 },
      ]);
    });
  });
});
