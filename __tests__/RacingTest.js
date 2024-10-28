import RacingCar from '../src/RacingCar.js';
import RacingGame from '../src/RacingGame.js';

describe('자동차 이름 입력 테스트', () => {
  const racingGame = new RacingGame();
  test('자동차 이름을 쉼표(,)로 구분합니다.', () => {
    racingGame.setRacingCars('pobi,woni,jun');
    expect(racingGame.carList).toEqual([
      new RacingCar('pobi'),
      new RacingCar('woni'),
      new RacingCar('jun'),
    ]);
  });

  test('자동차 이름 5자 이상 시 예외가 발생합니다.', () => {
    expect(() => racingGame.setRacingCars('pobiwoni,jun')).toThrow();
  });

  test('중복된 자동차 이름이 입력되면 예외가 발생합니다.', () => {
    expect(() => racingGame.setRacingCars('pobi,jun,jun')).toThrow();
  });

  test('문자열에 공백이 입력되면 예외가 발생합니다.', () => {
    expect(() => racingGame.setRacingCars('p bi,woni,jun')).toThrow();
  });
});
