import Car from '../../src/Model/Car';
import CarMovementService from '../../src/Service/CarMovementService';
import { mockRandoms } from './ApplicationTest';

describe('carMovementService', () => {
  test('0에서 9사이의 무작위 값을 생성한다', () => {
    const mockValues = [8];

    mockRandoms(mockValues);

    const carMovementService = new CarMovementService();
    const randomValue = carMovementService.generateRandomNumber();

    expect(randomValue).toBeGreaterThanOrEqual(0);
    expect(randomValue).toBeLessThanOrEqual(9);
  });

  test('전진 여부를 결정한다', () => {
    const mockValues = [4, 1];

    mockRandoms(mockValues);

    const carMovementService = new CarMovementService();

    expect(carMovementService.decideMoveForward()).toBe(true);
    expect(carMovementService.decideMoveForward()).toBe(false);
  });

  test('무작위 값이 4 이상일 때 전진한다', async () => {
    const cars = [new Car('pobi')];
    const mockValues = [8];

    mockRandoms(mockValues);

    const carMovementService = new CarMovementService();
    carMovementService.moveCars(cars);

    expect(cars[0].getForwardCount()).toBe(1);
  });

  test('무작위 값이 3 이하일 때 전진하지 않는다', async () => {
    const cars = [new Car('pobi')];
    const mockValues = [2];

    mockRandoms(mockValues);

    const carMovementService = new CarMovementService();
    carMovementService.moveCars(cars);

    expect(cars[0].getForwardCount()).toBe(0);
  });
});
