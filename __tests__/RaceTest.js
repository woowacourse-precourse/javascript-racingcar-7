import Car from '../src/Car';
import Race from '../src/Race';

describe('경주 클래스', () => {
  test('각 자동차 별 전진횟수 업데이트', () => {
    //given
    const car1 = new Car('car1');
    const car2 = new Car('car2');

    jest
      .spyOn(Car, 'canMoveForward')
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(false);

    const MOVE_CNT = 3;
    const race = new Race([car1, car2], MOVE_CNT);

    //when
    race.moveCars();

    //then
    expect(car1.moveCnt).toBe(1);
    expect(car2.moveCnt).toBe(0);
    expect(race.time).toBe(2);
  });
});
