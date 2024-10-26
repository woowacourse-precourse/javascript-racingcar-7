import { MissionUtils } from '@woowacourse/mission-utils';
import Car from '../src/Car';
import Race from '../src/Race';

const canMoveForwardSpy = (inputs) => {
  inputs.reduce(
    (acc, input) => acc.mockReturnValueOnce(input),
    jest.spyOn(Car, 'canMoveForward'),
  );
  jest.spyOn(Car, 'canMoveForward');
};

describe('경주 클래스', () => {
  test('각 자동차 별 전진횟수 업데이트', () => {
    //given
    const car1 = new Car('car1');
    const car2 = new Car('car2');
    canMoveForwardSpy([true, false]);

    const MOVE_CNT = 3;
    const race = new Race([car1, car2], MOVE_CNT);

    //when
    race.moveCars();

    //then
    expect(car1.moveCnt).toBe(1);
    expect(car2.moveCnt).toBe(0);
    expect(race.time).toBe(2);
  });

  test('차수별 실행결과 출력 메서드', () => {
    //given
    const car1 = new Car('car1');
    const car2 = new Car('car2');
    canMoveForwardSpy([true, false]);

    const MOVE_CNT = 3;
    const race = new Race([car1, car2], MOVE_CNT);
    race.moveCars();

    const logs = ['car1 : -', 'car2 : '];
    const logSpy = jest.spyOn(MissionUtils.Console, 'print');
    logSpy.mockClear();

    //when
    race.printRaceLog();

    //then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
