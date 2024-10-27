import CarRacingGame from '../src/classes/CarRacingGame';

describe('CarRacingGame', () => {
  let game;
  beforeEach(() => {
    const carNames = ['pobi', 'woni', 'jun'];
    game = new CarRacingGame(carNames);
  });

  test('playRound: 모든 자동차가 이동을 시도', () => {
    game.cars.forEach(car => jest.spyOn(car, 'attemptMove').mockImplementation(() => {}));
    game.playRound();
    game.cars.forEach(car => expect(car.attemptMove).toHaveBeenCalled());
  });

  test('determineWinners: 가장 멀리 이동한 자동차가 우승.', () => {
    game.cars[0].distance = 5;
    game.cars[1].distance = 3;
    game.cars[2].distance = 5;

    const winners = game.determineWinners();
    expect(winners).toEqual(['pobi', 'jun']);
  });
});
