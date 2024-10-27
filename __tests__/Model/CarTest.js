import Car from './Car';

describe('Car', () => {
  test('이름과 초기 값을 설정한다', () => {
    const car = new Car('pobi');

    expect(car.getName()).toBe('pobi');
    expect(car.getForwardCount()).toBe(0);
    expect(car.getRecords()).toEqual([]);
  });

  test('자동차가 전진한다', () => {
    const car = new Car('pobi');

    car.moveForward();
    expect(car.getForwardCount()).toBe(1);

    car.moveForward();
    expect(car.getForwardCount()).toBe(2);
  });

  test('현재 전진한 정도를 저장한다', () => {
    const car = new Car('pobi');

    car.moveForward();
    car.saveForwardStatus();
    expect(car.getRecords()).toEqual([1]);

    car.saveForwardStatus();
    expect(car.getRecords()).toEqual([1, 1]);

    car.moveForward();
    car.saveForwardStatus();
    expect(car.getRecords()).toEqual([1, 1, 2]);
  });

  test('자동차의 이름을 반환한다', () => {
    const car = new Car('pobi');

    expect(car.getName()).toBe('pobi');
  });

  test('전진 기록을 반환한다', () => {
    const car = new Car('pobi');

    car.moveForward();
    car.saveForwardStatus();

    car.moveForward();
    car.saveForwardStatus();

    expect(car.getRecords()).toEqual([1, 2]);
  });
});
