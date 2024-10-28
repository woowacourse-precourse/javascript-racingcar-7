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

  test('모든 자동차가 같은 위치에 있을 때 모두를 우승자로 반환한다', () => {
    race.cars = [
      { name: 'car1', position: 3 },
      { name: 'car2', position: 3 },
      { name: 'car3', position: 3 },
    ];
    const winners = race.determineWinners();
    expect(winners.length).toBe(3);
    expect(winners.map((car) => car.name)).toEqual(['car1', 'car2', 'car3']);
  });

  test('한대의 자동차만 가장 앞에 있을 때 해당 자동차를 우승자로 반환한다', () => {
    race.cars = [
      { name: 'car1', position: 5 },
      { name: 'car2', position: 3 },
      { name: 'car3', position: 3 },
    ];

    const winners = race.determineWinners();
    expect(winners.length).toBe(1);
    expect(winners.map((car) => car.name)).toEqual(['car1']);
  });
});
