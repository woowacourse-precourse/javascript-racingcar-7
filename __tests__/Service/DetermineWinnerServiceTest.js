import Car from '../../src/Model/Car';
import DetermineWinnerService from '../../src/Service/DetermineWinnerService';

describe('DetermineWinnerService', () => {
  test('우승자를 결정한다', () => {
    const carName1 = 'pobi';
    const carName2 = 'woni';

    const car1 = new Car(carName1);
    const car2 = new Car(carName2);
    const cars = [car1, car2];

    const determineWinnerService = new DetermineWinnerService();
    car1.moveForward();
    const winner = determineWinnerService.determineWinners(cars);

    expect(winner).toEqual(['pobi']);
  });

  test('가장 많이 전진한 자동차가 2대 이상일때 우승자들을 결정한다', () => {
    const carName1 = 'pobi';
    const carName2 = 'woni';

    const car1 = new Car(carName1);
    const car2 = new Car(carName2);
    const cars = [car1, car2];

    const determineWinnerService = new DetermineWinnerService();
    car1.moveForward();
    car2.moveForward();
    const winners = determineWinnerService.determineWinners(cars);

    expect(winners).toEqual(['pobi', 'woni']);
  });
});
