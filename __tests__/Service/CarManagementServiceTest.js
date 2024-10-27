import CarManagementService from '../../src/Service/CarManagementService';

describe('CarManagementService', () => {
  test('새로운 자동차를 추가한다', () => {
    const carName = 'pobi';

    const carManagementService = new CarManagementService();
    carManagementService.addCar(carName);
    const cars = carManagementService.getCars();

    expect(cars.length).toBe(1);
    expect(cars[0].getName()).toBe(carName);
  });

  test('추가된 모든 자동차들을 반환한다', () => {
    const carName1 = 'pobi';
    const carName2 = 'woni';

    const carManagementService = new CarManagementService();
    carManagementService.addCar(carName1);
    carManagementService.addCar(carName2);

    const cars = carManagementService.getCars();

    expect(cars.length).toBe(2);
    expect(cars[0].getName()).toBe(carName1);
    expect(cars[1].getName()).toBe(carName2);
  });
});
