import { Console, MissionUtils } from '@woowacourse/mission-utils';
import { RaceManager } from './RaceManager';
import { Car } from '../Model/Car';

describe('자동차 경주 차 생성', () => {
  let raceManager;

  beforeEach(() => (raceManager = new RaceManager()));

  test('makeCar 에러 반환 ', () => {
    expect(() => raceManager.makeCar('pobibibi')).toThrow();
  });

  test('car 생성', () => {
    raceManager.makeCar('kim');
    raceManager.makeCar('pobi');
    expect(raceManager.carArray).toEqual([
      { name: 'kim', distance: 0 },
      { name: 'pobi', distance: 0 },
    ]);
  });
});

describe('자동차 경주 진행', () => {
  let raceManager;

  beforeEach(() => {
    raceManager = new RaceManager();
    raceManager.makeCar = jest.fn();
    raceManager.makeCar.mockImplementation(
      () => (raceManager.carArray = [new Car('kim'), new Car('pobi')]),
    );
    raceManager.makeCar();
  });

  test('4 이상일 때 1칸 이동 ', () => {
    const spyFn = jest.spyOn(MissionUtils.Random, 'pickNumberInRange');
    spyFn.mockReturnValue(5);
    raceManager.runRaceStep();
    expect(raceManager.carArray[0].distance).toBe(1);
  });

  test('4 미만일 때 이동하지 않음 ', () => {
    jest.spyOn(MissionUtils.Random, 'pickNumberInRange').mockReturnValue(3);
    expect(raceManager.carArray[0].distance).toBe(0);
  });
});

describe('경주 단계 출력', () => {
  let raceManager;

  beforeEach(() => {
    raceManager = new RaceManager();
    raceManager.makeCar = jest.fn();
    raceManager.makeCar.mockImplementation(
      () =>
        (raceManager.carArray = [
          { name: 'kim', distance: 4 },
          { name: 'pobi', distance: 3 },
        ]),
    );
    raceManager.makeCar();
  });

  test('경주 단계 출력', () => {
    const spyFn = jest.spyOn(Console, 'print');
    raceManager.showRaceStep();

    expect(spyFn).toHaveBeenNthCalledWith(1, 'kim : ----');
    expect(spyFn).toHaveBeenNthCalledWith(2, 'pobi : ---');
  });
});

describe('경주 결과 산출', () => {
  const raceManager = new RaceManager();
  beforeEach(() => {
    raceManager.makeCar = jest.fn();
    raceManager.makeCar.mockImplementation(
      () =>
        (raceManager.carArray = [
          { name: 'kim', distance: 4 },
          { name: 'pobi', distance: 3 },
        ]),
    );
    raceManager.makeCar();
  });

  test('최장 이동거리는 4칸', () => {
    expect(raceManager.getMaxDistance()).toBe(4);
  });

  test('우승자는 kim의 차', () => {
    expect(raceManager.getWinnerCar(4)).toEqual([{ name: 'kim', distance: 4 }]);
  });

  test('우승자 이름은 kim', () => {
    const spyFn = jest.spyOn(Console, 'print');
    raceManager.announceWinner([{ name: 'kim', distance: 4 }]);

    expect(spyFn).toBeCalledWith('최종 우승자 : kim');
  });
});
