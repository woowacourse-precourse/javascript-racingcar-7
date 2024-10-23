import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';
import Car from '../src/Car.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};
const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('게임 시작 테스트', () => {
  const [carNameArr, tryNumber, randomNumbers, answer] = [
    [new Car('pobi'), new Car('lisa'), new Car('jun')],
    4,
    [1, 2, 7, 3, 4, 4, 0, 4, 9, 6, 8, 5],
    [
      '실행 결과',
      'pobi : ',
      'lisa : ',
      'jun : -',
      '',
      'pobi : ',
      'lisa : -',
      'jun : --',
      '',
      'pobi : ',
      'lisa : --',
      'jun : ---',
      '',
      'pobi : -',
      'lisa : ---',
      'jun : ----',
    ],
  ];

  test('매 시행마다 각 자동차들의 상태 출력 테스트', () => {
    const logSpy = getLogSpy();

    mockRandoms(randomNumbers);

    const app = new App();
    app.gameStart(carNameArr, tryNumber);

    answer.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});

describe('우승자 출력 테스트', () => {
  const TEST_CASES = [
    [[new Car('pobi')], [false, true, false], ['최종 우승자 : pobi']],
    [
      [new Car('pobi'), new Car('lisa')],
      [false, false, false, false, false, false],
      ['최종 우승자 : pobi,lisa'],
    ],
    [
      [new Car('pobi'), new Car('lisa'), new Car('dany')],
      [false, false, false, true, false, false, false, false, true],
      ['최종 우승자 : pobi,dany'],
    ],
  ];

  test.each(TEST_CASES)('여러명일 경우 쉼표(,)를 사용하여 출력한다', (cars, isMoved, answer) => {
    const logSpy = getLogSpy();

    cars.forEach((car, carIdx) => {
      isMoved.forEach((bool, boolIdx) => {
        if (boolIdx % 3 === carIdx && bool) {
          car.move();
        }
      });
    });

    cars.forEach((car) => car.getCarInformation());

    const app = new App();
    app.result(cars);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(answer.toString()));
  });
});
