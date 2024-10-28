import RaceCar from '../../src/Domain/RaceCar';

describe('RaceCar', () => {
  test('이름과 초기 값을 설정한다', () => {
    const raceCar = new RaceCar('pobi');

    expect(raceCar.getName()).toBe('pobi');
    expect(raceCar.getForwardCount()).toBe(0);
    expect(raceCar.getRecords()).toEqual([]);
  });

  test('자동차가 전진한다', () => {
    const raceCar = new RaceCar('pobi');

    raceCar.moveForward();
    expect(raceCar.getForwardCount()).toBe(1);

    raceCar.moveForward();
    expect(raceCar.getForwardCount()).toBe(2);
  });

  test('현재 전진한 정도를 저장한다', () => {
    const raceCar = new RaceCar('pobi');

    raceCar.moveForward();
    raceCar.saveForwardStatus();
    expect(raceCar.getRecords()).toEqual([1]);

    raceCar.saveForwardStatus();
    expect(raceCar.getRecords()).toEqual([1, 1]);

    raceCar.moveForward();
    raceCar.saveForwardStatus();
    expect(raceCar.getRecords()).toEqual([1, 1, 2]);
  });

  test('자동차의 이름을 반환한다', () => {
    const raceCar = new RaceCar('pobi');

    expect(raceCar.getName()).toBe('pobi');
  });

  test('전진 기록을 반환한다', () => {
    const raceCar = new RaceCar('pobi');

    raceCar.moveForward();
    raceCar.saveForwardStatus();

    raceCar.moveForward();
    raceCar.saveForwardStatus();

    expect(raceCar.getRecords()).toEqual([1, 2]);
  });
});
