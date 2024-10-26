import Car from '../src/Model/Car';
import RaceService from '../src/Service/RaceService';

describe('RaceService', () => {
  test('0에서 9사이의 무작위 값을 생성한다', async () => {
    const raceService = new RaceService();

    for (let i = 0; i < 50; i++) {
      const randomValue = raceService.generateRandomNumber();
      expect(randomValue).toBeGreaterThanOrEqual(0);
      expect(randomValue).toBeLessThanOrEqual(9);
    }
  });

  test('전진 여부를 결정한다', () => {
    const raceService = new RaceService();

    jest.spyOn(raceService, 'generateRandomNumber').mockReturnValue(5);
    expect(raceService.decideMoveForward()).toBe(true);

    jest.spyOn(raceService, 'generateRandomNumber').mockReturnValue(3);
    expect(raceService.decideMoveForward()).toBe(false);
  });

  test('무작위 값이 4 이상일 때 전진한다', async () => {
    const car = [new Car()];

    const raceService = new RaceService();
    jest.spyOn(raceService, 'decideMoveForward').mockReturnValue(true);
    raceService.moveCar(car);

    expect(car[0].getForwardCount()).toBe(1);
  });
});
