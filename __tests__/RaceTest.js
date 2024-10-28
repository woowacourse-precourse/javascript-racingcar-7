import { MissionUtils } from '@woowacourse/mission-utils';
import Car from '../src/car/Car';
import Race from '../src/race/Race';

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

    const race = new Race([car1, car2]);

    //when
    race.moveCars();

    //then
    expect(car1.moveCnt).toBe(1);
    expect(car2.moveCnt).toBe(0);
  });

  test('차수별 실행결과 출력 메서드', () => {
    //given
    const car1 = new Car('car1');
    const car2 = new Car('car2');
    canMoveForwardSpy([true, false]);

    const race = new Race([car1, car2]);
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

  test('우승자 판별 메서드', () => {
    //given
    const car1 = new Car('car1');
    const car2 = new Car('car2');
    const car3 = new Car('car3');
    canMoveForwardSpy([true, false, true]);

    const race = new Race([car1, car2, car3]);
    race.moveCars();

    //when
    race.selectWinner();

    //then
    expect(race.winners).toEqual([car1, car3]);
  });

  test.each([
    [[new Car('car1'), new Car('car2')], '최종 우승자 : car1, car2'],
    [[new Car('car1')], '최종 우승자 : car1'],
  ])('결과 출력 메서드', (inputs, expected) => {
    //given
    const winners = inputs;
    const race = new Race(winners);
    const logSpy = jest.spyOn(MissionUtils.Console, 'print');
    logSpy.mockClear();

    //when
    race.printWinner();

    //then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(expected));
  });
});
