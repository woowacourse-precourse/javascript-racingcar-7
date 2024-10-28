import { Console, MissionUtils } from '@woowacourse/mission-utils';
import { RaceManager } from './RaceManager';
import { Car } from '../Model/Car';

let raceManager;
beforeEach(() => (raceManager = new RaceManager()));

describe('자동차 경주 시작', () => {
  test('5글자 이상인 이름 에러 반환하는지 테스트', () => {
    expect(() => raceManager.makeCar('pobibibi')).toThrow();
  });

  test.each([['kim'], ['pobi'], ['pone'], ['jake']])(
    '%s 이름의 자동차 객체 생성 되어 저장되었는지 확인',
    (first) => {
      raceManager.makeCar(first);

      expect(raceManager.carArray[raceManager.carArray.length - 1]).toEqual({
        name: first,
        distance: 0,
      });
    },
  );
});

describe('자동차 경주 진행', () => {
  beforeEach(() => {
    raceManager.makeCar = jest.fn();
    raceManager.makeCar.mockImplementation(
      () => (raceManager.carArray = [new Car('kim'), new Car('pobi')]),
    );
    raceManager.makeCar();
  });

  test.each([
    [5, 1],
    [3, 0],
  ])('랜덤 숫자가 %s 일때 %s 칸 이동', (first, second) => {
    jest.spyOn(MissionUtils.Random, 'pickNumberInRange').mockReturnValue(first);

    raceManager.runRaceStep();

    expect(raceManager.carArray[0].distance).toBe(second);
  });
});

describe('자동차 경주 결과', () => {
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

  test('경주 한 단계 결과 출력', () => {
    const spyFn = jest.spyOn(Console, 'print');

    raceManager.showRaceStep();

    expect(spyFn).toHaveBeenNthCalledWith(1, 'kim : ----');
    expect(spyFn).toHaveBeenNthCalledWith(2, 'pobi : ---');
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
