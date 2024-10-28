import { Console, Random } from '@woowacourse/mission-utils';
import Race from './race.js';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    print: jest.fn(),
  },
  Random: {
    pickNumberInRange: jest.fn(),
  },
}));

describe('Race', () => {
  const carNames = ['car1', 'car2', 'car3'];
  const attemptCount = 3;
  let race;

  beforeEach(() => {
    race = new Race(carNames, attemptCount);
    Console.print.mockClear();
    Random.pickNumberInRange.mockClear();
  });

  test('printStartMessage는 시작 메시지를 출력한다', () => {
    race.printStartMessage();
    expect(Console.print).toHaveBeenCalledWith('\n');
    expect(Console.print).toHaveBeenCalledWith('실행 결과');
  });

  test('executeTurn은 각 차에 대해 4 이상이면 전진하도록 한다', () => {
    Random.pickNumberInRange.mockReturnValueOnce(4).mockReturnValueOnce(3).mockReturnValueOnce(5);
    race.executeTurn();
    expect(Console.print).toHaveBeenCalledWith('car1 : -');
    expect(Console.print).toHaveBeenCalledWith('car3 : -');
    expect(Console.print).not.toHaveBeenCalledWith('car2 : -');
  });

  test('getWinners는 최대 진행도를 가진 자동차 이름들을 반환한다', () => {
    race.carList[0].progress = 2;
    race.carList[1].progress = 2;
    race.carList[2].progress = 1;
    const winners = race.getWinners();
    expect(winners).toEqual(['car1', 'car2']);
  });

  test('printWinners는 우승자를 출력한다', () => {
    const winners = ['car1', 'car2'];
    race.printWinners(winners);
    expect(Console.print).toHaveBeenCalledWith('최종 우승자 : car1, car2');
  });

  test('play는 전체 게임을 실행하고 우승자를 출력한다', () => {
    jest.spyOn(race, 'printStartMessage');
    jest.spyOn(race, 'race');
    jest.spyOn(race, 'getWinners').mockReturnValue(['car1']);
    jest.spyOn(race, 'printWinners');

    race.play();

    expect(race.printStartMessage).toHaveBeenCalled();
    expect(race.race).toHaveBeenCalled();
    expect(race.getWinners).toHaveBeenCalled();
    expect(race.printWinners).toHaveBeenCalledWith(['car1']);
  });
});
