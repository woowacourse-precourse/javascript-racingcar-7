import RaceCarManagementService from '../../src/Service/RaceCarManagementService';

describe('RaceCarManagementService', () => {
  test('새로운 자동차를 추가한다', () => {
    const raceCarName = 'pobi';

    const raceCarManagementService = new RaceCarManagementService();
    raceCarManagementService.addRaceCar(raceCarName);
    const raceCars = raceCarManagementService.getRaceCars();

    expect(raceCars.length).toBe(1);
    expect(raceCars[0].getName()).toBe(raceCarName);
  });

  test('추가된 모든 자동차들을 반환한다', () => {
    const raceCarName1 = 'pobi';
    const raceCarName2 = 'woni';

    const raceCarManagementService = new RaceCarManagementService();
    raceCarManagementService.addRaceCar(raceCarName1);
    raceCarManagementService.addRaceCar(raceCarName2);

    const raceCars = raceCarManagementService.getRaceCars();

    expect(raceCars.length).toBe(2);
    expect(raceCars[0].getName()).toBe(raceCarName1);
    expect(raceCars[1].getName()).toBe(raceCarName2);
  });
});
