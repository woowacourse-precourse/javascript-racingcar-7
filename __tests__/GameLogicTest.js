import generateRandomNumber from '../src/game/GenerateRandomNumber.js';
import GAME from '../src/constants/Game.js';
import Car from '../src/game/Car';
import CarController from '../src/game/CarController.js';
describe('게임로직 : 0에서 9사이의 랜덤값을 생성하는 기능', () => {
  test('주어진 범위내의 랜덤값이 맞는지 확인', () => {
    const randomNumber = generateRandomNumber();

    expect(randomNumber).toBeGreaterThanOrEqual(GAME.minRandomNumber);
    expect(randomNumber).toBeLessThanOrEqual(GAME.maxRandomNumber);
  });
});

describe('게임로직 : 랜덤값에 따라 전진조건을 통과하는지 처리하는 기능', () => {
  test('랜덤값이 4일 경우 전진횟수가 증가하는지 확인', () => {
    const car = new Car('testCar');
    car.moveForward(4);

    expect(car.moveCount).toBe(1);
  });
  test('랜덤값이 0일 경우 전진횟수가 그대로인지 확인', () => {
    const car = new Car('testCar');
    car.moveForward(0);

    expect(car.moveCount).toBe(0);
  });
});

describe('게임로직 : 누적값을 비교하여 최종 우승자를 판단하는 기능', () => {
  let carController;
  beforeEach(() => {
    carController = new CarController(['Car A', 'Car B', 'Car C']);
  });

  test('우승자가 1명일때, 최종우승자를 판단하는지 확인', () => {
    carController.cars[0].moveCount = 1; // Car A
    carController.cars[1].moveCount = 4; // Car B
    carController.cars[2].moveCount = 2; // Car C

    const winners = carController.getCarWithMaxPosition();

    expect(winners).toEqual(['Car B']);
  });

  test('우승자가 2명일때, 최종우승자가 여러명이 되는지 확인', () => {
    carController.cars[0].moveCount = 4; // Car A
    carController.cars[1].moveCount = 4; // Car B
    carController.cars[2].moveCount = 2; // Car C

    const winners = carController.getCarWithMaxPosition();

    expect(winners).toEqual(['Car A', 'Car B']);
  });

  test('모두 전진하기 못했을 때, 모든 자동차가 우승자가 되는지 확인', () => {
    carController.cars[0].moveCount = 0; // Car A
    carController.cars[1].moveCount = 0; // Car B
    carController.cars[2].moveCount = 0; // Car C

    const winners = carController.getCarWithMaxPosition();

    expect(winners).toEqual(['Car A', 'Car B', 'Car C']);
  });
});
