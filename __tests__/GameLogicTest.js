import generateRandomNumber from '../src/game/GenerateRandomNumber.js';
import GAME from '../src/constants/Game.js';
import Car from '../src/game/Car';
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
