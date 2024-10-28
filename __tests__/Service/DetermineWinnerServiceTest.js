import RaceCar from '../../src/Domain/RaceCar';
import DetermineWinnerService from '../../src/Service/DetermineWinnerService';

describe('DetermineWinnerService', () => {
  test('우승자를 결정한다', () => {
    const raceCarName1 = 'pobi';
    const raceCarName2 = 'woni';

    const raceCar1 = new RaceCar(raceCarName1);
    const raceCar2 = new RaceCar(raceCarName2);
    const raceCars = [raceCar1, raceCar2];

    const determineWinnerService = new DetermineWinnerService();
    raceCar1.moveForward();
    const winner = determineWinnerService.determineWinners(raceCars);

    expect(winner).toEqual(['pobi']);
  });

  test('가장 많이 전진한 자동차가 2대 이상일때 우승자들을 결정한다', () => {
    const raceCarName1 = 'pobi';
    const raceCarName2 = 'woni';

    const raceCar1 = new RaceCar(raceCarName1);
    const raceCar2 = new RaceCar(raceCarName2);
    const raceCars = [raceCar1, raceCar2];

    const determineWinnerService = new DetermineWinnerService();
    raceCar1.moveForward();
    raceCar2.moveForward();
    const winners = determineWinnerService.determineWinners(raceCars);

    expect(winners).toEqual(['pobi', 'woni']);
  });
});
