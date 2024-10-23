import { MissionUtils } from '@woowacourse/mission-utils';
import Game from './Game.js';

const getReadLineAsync = () => {
  return jest.spyOn(MissionUtils.Console, 'readLineAsync');
};

const getRandomPickNumber = () => {
  return jest.spyOn(MissionUtils.Random, 'pickNumberInRange');
};

describe('Game', () => {
  /** @type {Game} */
  let game;
  let readLineAsyncSpy;
  let randomPickNumberRangeSpy;

  beforeEach(() => {
    game = new Game();
    readLineAsyncSpy = getReadLineAsync();
    randomPickNumberRangeSpy = getRandomPickNumber();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('자동차 초기화 initializeCars', () => {
    test('입력된 이름으로 자동차를 생성한다', () => {
      const carNames = ['pobi', 'woni', 'jun'];
      game.initializeCars(carNames);
      expect(game.cars.length).toBe(3);
      expect(game.cars[0].name).toBe('pobi');
      expect(game.cars[1].name).toBe('woni');
      expect(game.cars[2].name).toBe('jun');
    });
  });

  describe('자동차 이동', () => {
    test('랜덤 값이 4 이상일 때 자동차가 전진한다', () => {
      game.initializeCars(['car1']);
      randomPickNumberRangeSpy.mockReturnValue(4);

      game.moveForward();

      expect(game.cars[0].position).toBe(1);
    });

    test('랜덤 값이 3 이하일 때 자동차가 전진하지 않는다', () => {
      game.initializeCars(['car1']);
      randomPickNumberRangeSpy.mockReturnValue(3);

      game.moveForward();

      expect(game.cars[0].position).toBe(0);
    });
  });

  describe('경주 진행 race', () => {
    test('지정된 횟수만큼 경주 진행한다.', () => {
      game.initializeCars(['cars1']);
      game.moveForward = jest.fn();
      game.printRaceStatus = jest.fn();

      game.race(3);

      expect(game.moveForward).toHaveBeenCalledTimes(3);
      expect(game.printRaceStatus).toHaveBeenCalledTimes(3);
    });
  });

  describe('우승자 결정 과정', () => {
    test('initializeCars가 올바르게 설정된다 ', () => {
      const mockCars = [
        { name: 'car1', position: 3 },
        { name: 'car2', position: 5 },
        { name: 'car3', position: 5 },
      ];

      jest.spyOn(game, 'initializeCars').mockImplementation(() => {
        game.cars = mockCars;
      });
      game.initializeCars(['car1', 'car2', 'car3']);

      expect(game.initializeCars).toHaveBeenCalledWith([
        'car1',
        'car2',
        'car3',
      ]);
    });

    test('determineWinners가 최고 위치의 자동차들을 반환한다.', () => {
      const mockCars = [
        { name: 'car1', position: 3 },
        { name: 'car2', position: 5 },
        { name: 'car3', position: 5 },
        { name: 'car4', position: 4 },
      ];

      jest.spyOn(game, 'initializeCars').mockImplementation(() => {
        game.cars = mockCars;
      });
      game.initializeCars(['car1', 'car2', 'car3', 'car4']);

      const winners = game.determineWinners();

      expect(winners.length).toBe(2);
      expect(winners.map((winner) => winner.name).join(', ')).toStrictEqual(
        'car2, car3'
      );
    });
  });
});
