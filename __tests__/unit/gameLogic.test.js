import Car from '../../src/models/Car.js';
import Game from '../../src/models/Game.js';
import { mockRandoms } from '../../src/utils/testUtils.js';

describe('전진 조건 판별', () => {
  let cars;
  let game;

  beforeEach(() => {
    cars = [new Car('Benz'), new Car('BMW')];
    game = new Game(cars, 1);
  });

  test('무작위 값이 4 이상일 경우 자동차가 전진한다.', () => {
    mockRandoms([4, 5]);

    game.playSingleRound();

    expect(cars[0].getPosition()).toBe(1);
    expect(cars[1].getPosition()).toBe(1);
  });

  test('무작위 값이 3 이하일 경우 자동차가 정지한다.', () => {
    mockRandoms([3, 2]);

    game.playSingleRound();

    expect(cars[0].getPosition()).toBe(0);
    expect(cars[1].getPosition()).toBe(0);
  });
});

describe('우승자 판별', () => {
  let cars;
  let game;

  beforeEach(() => {
    cars = [new Car('Audi'), new Car('BMW'), new Car('Volvo')];
    game = new Game(cars, 1);
  });

  test('가장 멀리 이동한 자동차가 우승자로 선택된다.', () => {
    cars[0].move();
    cars[1].move();
    cars[1].move();

    const winners = game.getWinners();

    expect(winners).toHaveLength(1);
    expect(winners[0].name).toBe('BMW');
  });

  test('여러 자동차가 공동 우승할 경우 쉼표로 구분된 이름 목록이 반환된다.', () => {
    cars[0].move();
    cars[1].move();

    const winners = game.getWinners();

    expect(winners).toHaveLength(2);
    expect(winners.map((car) => car.name)).toEqual(['Audi', 'BMW']);
  });

  test('우승자가 알파벳 순서대로 정렬된다.', () => {
    cars[2].move();
    cars[0].move();

    const winners = game.getWinners();

    expect(winners.map((car) => car.name)).toEqual(['Audi', 'Volvo']);
  });
});
