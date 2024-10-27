import RacingCar from '../src/RacingCar.js';
import RacingGame from '../src/RacingGame.js';

describe('자동차 이름 입력 테스트', () => {
  const racingGame = new RacingGame();
  test('자동차 이름을 쉼표(,)로 구분한다.', () => {
    racingGame.setRacingCars('pobi,woni,jun');
    expect(racingGame.carList).toEqual([
      new RacingCar('pobi'),
      new RacingCar('woni'),
      new RacingCar('jun'),
    ]);
  });

  test('자동차 이름 5자 이상 시 예외가 발생한다.', () => {
    expect(() => racingGame.setRacingCars('pobiwoni,jun')).toThrow();
  });
});
