import { MissionUtils } from '@woowacourse/mission-utils';
import Game from './Game.js';

const getReadLineAsync = () => {
  return jest.spyOn(MissionUtils.Console, 'readLineAsync');
};

const getRandomPickNumber = () => {
  return jest.spyOn(MissionUtils.Random, 'pickNumberInRange');
};

describe('Game', () => {
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

  describe('자동차 이동 moveForward', () => {
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
});
