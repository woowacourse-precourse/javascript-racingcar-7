import User from '../user/User.js';
import outputView from '../view/outputView.js';
import Car from './Car.js';
import Race from './Race.js';

describe('Race 클래스', () => {
  /**@type {Race} */
  let race;
  let moveForwardSpy;
  let getCarsSpy;
  let printRaceStatusSpy;
  let car;
  let mockCars;
  let user;

  beforeEach(() => {
    mockCars = [
      { name: 'car1', position: 0 },
      { name: 'car2', position: 0 },
      { name: 'car3', position: 0 },
    ];
    race = new Race();
    moveForwardSpy = jest.spyOn(race, 'moveForward');
    getCarsSpy = jest.spyOn(race, 'getCars');
    printRaceStatusSpy = jest.spyOn(outputView, 'printRaceStatus');
    car = new Car('mockCars');
    user = new User();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('자동차를 초기화(배치)한다', () => {
    race.initializeCars(mockCars);
    expect(race.cars.length).toBe(3);
  });

  test('입력받은 시도횟수만큼 경주를 진행한다', () => {
    const attempts = 5;
    race.race(attempts);

    expect(moveForwardSpy).toHaveBeenCalledTimes(attempts);
    expect(printRaceStatusSpy).toHaveBeenCalledTimes(attempts);
  });

  test('각 라운드마다 자동차를 전진시키고 상태를 출력한다', () => {
    const attempts = 3;
    race.race(attempts);

    for (let i = 0; i < attempts; i++) {
      expect(moveForwardSpy).toHaveBeenCalledTimes(attempts);
      expect(printRaceStatusSpy).toHaveBeenCalledTimes(attempts);
    }
  });

  test.todo('determineWinners가 최고 위치의 자동차들을 반환한다.');

  test.todo('우승자를 올바르게 결정한다.');
});
