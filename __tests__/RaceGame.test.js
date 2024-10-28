import { MissionUtils } from '@woowacourse/mission-utils';
import Car from '../src/models/Car';
import RaceGame from '../src/models/RaceGame';

describe('RaceGame 클래스', () => {
  let participants;
  const gameAttempts = 5;
  let raceGame;

  beforeEach(() => {
    participants = ['tobi', 'woni', 'crong'].map((name) => new Car(name));
    raceGame = new RaceGame(participants, gameAttempts);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('올바른 초기화를 해야 합니다.', () => {
    expect(raceGame.participants).toEqual(participants);
    expect(raceGame.gameAttempts).toBe(gameAttempts);
  });

  describe('runGame 메서드', () => {
    test('입력받은 게임 시도 횟수만큼 updateDistance가 호출되어야 합니다.', () => {
      const updateDistanceSpy = jest.spyOn(Car.prototype, 'updateDistance');

      raceGame.runGame();

      expect(updateDistanceSpy).toHaveBeenCalledTimes(
        participants.length * gameAttempts,
      );
    });
  });

  describe('getWinners 메서드', () => {
    test('가장 멀리 이동한 참가자를 반환해야 합니다.', () => {
      participants[0].getDistance = jest.fn().mockReturnValue(5);
      participants[1].getDistance = jest.fn().mockReturnValue(3);
      participants[2].getDistance = jest.fn().mockReturnValue(4);

      const winners = raceGame.getWinners();

      expect(winners).toEqual([participants[0]]);
    });
    test('가장 멀리 이동한 참가자가 복수인 경우 모든 인원을 반환해야 합니다.', () => {
      participants[0].getDistance = jest.fn().mockReturnValue(5);
      participants[1].getDistance = jest.fn().mockReturnValue(3);
      participants[2].getDistance = jest.fn().mockReturnValue(5);
      participants[2].getDistance = jest.fn().mockReturnValue(5);

      const winners = raceGame.getWinners();

      expect(winners).toEqual([
        participants[0],
        participants[2],
        participants[3],
      ]);
    });
  });
});
