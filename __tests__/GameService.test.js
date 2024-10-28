// tests/GameService.test.js

import GameService from '../src/Services/GameService.js';
import { OutputView } from '../src/views/OutputView.js';
import RaceGame from '../src/models/RaceGame.js';
import Car from '../src/models/Car.js';
import { VALIDATION_ERROR_MESSAGE } from '../src/constants/constants.js';

jest.mock('../src/views/OutputView.js');

describe('GameService 클래스 테스트', () => {
  let raceGame;
  let gameService;

  beforeEach(() => {
    const cars = [new Car('pobi'), new Car('crong'), new Car('honux')];
    raceGame = new RaceGame(cars, 5);
    gameService = new GameService(raceGame);
  });

  test('startRace 메서드가 올바르게 실행되어야 합니다.', () => {
    gameService.startRace();

    const expectedCallCount =
      1 + raceGame.gameAttempts * (raceGame.participants.length + 1);
    expect(OutputView.printResult).toHaveBeenCalledTimes(expectedCallCount);

    expect(OutputView.printResult).toHaveBeenNthCalledWith(1, '\n실행 결과');
  });

  test('startRace 실행 후 참가자들의 이동 거리가 업데이트되어야 합니다.', () => {
    const spyUpdateDistance = jest.spyOn(Car.prototype, 'updateDistance');
    gameService.startRace();

    expect(spyUpdateDistance).toHaveBeenCalledTimes(
      raceGame.participants.length * raceGame.gameAttempts,
    );

    spyUpdateDistance.mockRestore();
  });

  test('showResult 메서드가 올바른 우승자를 출력해야 합니다.', () => {
    raceGame.participants[0].distance = 5; // pobi
    raceGame.participants[1].distance = 3; // crong
    raceGame.participants[2].distance = 5; // honux

    gameService.showResult();

    const expectedWinners = 'pobi, honux';

    expect(OutputView.printResult).toHaveBeenLastCalledWith(
      `최종 우승자 : ${expectedWinners}`,
    );
  });

  test('참가자가 없을 경우 예외를 발생시켜야 합니다.', () => {
    expect(() => {
      new RaceGame([], 5);
    }).toThrow(VALIDATION_ERROR_MESSAGE.PARTICIPANT_COUNT_OUT_OF_RANGE);
  });

  test('시도 횟수가 0인 경우 예외를 발생시켜야 합니다.', () => {
    expect(() => {
      new RaceGame(raceGame.participants, 0);
    }).toThrow(VALIDATION_ERROR_MESSAGE.IS_NOT_POSITIVE_INTEGER);
  });

  test('우승자가 한 명일 때 결과를 올바르게 출력해야 합니다.', () => {
    raceGame.participants[0].distance = 5; // pobi
    raceGame.participants[1].distance = 3; // crong
    raceGame.participants[2].distance = 2; // honux

    gameService.showResult();

    const expectedWinner = 'pobi';

    expect(OutputView.printResult).toHaveBeenLastCalledWith(
      `최종 우승자 : ${expectedWinner}`,
    );
  });

  test('모든 참가자의 거리가 동일한 경우 모두 우승자로 출력해야 합니다.', () => {
    raceGame.participants.forEach((car) => {
      car.distance = 4;
    });

    gameService.showResult();

    const expectedWinners = 'pobi, crong, honux';

    expect(OutputView.printResult).toHaveBeenLastCalledWith(
      `최종 우승자 : ${expectedWinners}`,
    );
  });

  test('startRace 실행 시 OutputView.printResult가 올바른 순서로 호출되어야 합니다.', () => {
    gameService.startRace();

    const calls = OutputView.printResult.mock.calls;

    expect(calls[0][0]).toBe('\n실행 결과');

    let callIndex = 1;
    for (let round = 0; round < raceGame.gameAttempts; round++) {
      raceGame.participants.forEach((car) => {
        expect(calls[callIndex][0]).toContain(`${car.name} : `);
        callIndex++;
      });
      expect(calls[callIndex][0]).toBe('');
      callIndex++;
    }
  });

  test('startRace 실행 후 참가자들의 최종 거리가 유효해야 합니다.', () => {
    gameService.startRace();

    raceGame.participants.forEach((car) => {
      expect(car.distance).toBeGreaterThanOrEqual(0);
      expect(car.distance).toBeLessThanOrEqual(raceGame.gameAttempts);
    });
  });

  test('showResult 실행 시 getWinners 메서드가 호출되어야 합니다.', () => {
    const spyGetWinners = jest.spyOn(raceGame, 'getWinners');

    gameService.showResult();

    expect(spyGetWinners).toHaveBeenCalled();
    spyGetWinners.mockRestore();
  });

  test('출력 결과에 참가자 이름이 올바르게 포함되어야 합니다.', () => {
    gameService.startRace();

    const calls = OutputView.printResult.mock.calls;

    raceGame.participants.forEach((car) => {
      const nameIncluded = calls.some((call) =>
        call[0].includes(`${car.name} : `),
      );
      expect(nameIncluded).toBe(true);
    });
  });

  test('시도 횟수만큼 레이스가 진행되어야 합니다.', () => {
    const spyUpdateDistance = jest.spyOn(Car.prototype, 'updateDistance');
    gameService.startRace();

    expect(spyUpdateDistance).toHaveBeenCalledTimes(
      raceGame.participants.length * raceGame.gameAttempts,
    );

    spyUpdateDistance.mockRestore();
  });

  test('게임 시작 전에 "\n실행 결과"가 출력되어야 합니다.', () => {
    gameService.startRace();

    expect(OutputView.printResult).toHaveBeenCalledWith('\n실행 결과');
  });

  test('게임 종료 후 결과가 한 번만 출력되어야 합니다.', () => {
    gameService.showResult();

    const lastCallIndex = OutputView.printResult.mock.calls.length - 1;

    expect(OutputView.printResult.mock.calls[lastCallIndex][0]).toMatch(
      /^최종 우승자 : /,
    );
  });
});
