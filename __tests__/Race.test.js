import { startRace, canMove } from '../src/Race.js';
import Car from '../src/Car.js';

jest.mock('../src/Race', () => ({
  ...jest.requireActual('../src/Race'),
  canMove: jest.fn(),
}));

describe('경주 진행 테스트', () => {
  beforeEach(() => {
    jest.clearAllMocks(); 
  });

  test('각 라운드에서 이동 조건이 충족되는 경우에만 자동차가 이동해야 합니다.', () => {
    canMove.mockReturnValueOnce(true).mockReturnValueOnce(false);
    
    const carNames = ['pobi', 'crong'];
    const moveAttempts = 2;
    const cars = startRace(carNames, moveAttempts);

    expect(cars[0].getPosition()).toBe(1);
    expect(cars[1].getPosition()).toBe(0);
  });

  test('경주가 끝난 후 각 자동차의 위치가 시도 횟수와 조건에 맞게 반영됩니다.', () => {
    canMove.mockReturnValue(true);
    
    const carNames = ['pobi', 'crong'];
    const moveAttempts = 3;
    const cars = startRace(carNames, moveAttempts);

    cars.forEach((car) => {
      expect(car.getPosition()).toBe(moveAttempts);
    });
  });
});
