import RacingGame from '../src/RacingGame.js';
import { mockRandoms } from '../src/utils/tests/TestUtil.js';

describe('RacingGame 클래스 테스트', () => {
  test('시도한 횟수가 지나도 모든 자동차가 시작점이면 모든 참여자가 우승자입니다.', () => {
    const carNameList = ['park', 'ji', 'seop'];
    const racingGame = new RacingGame(carNameList, 3);

    mockRandoms([0, 0, 0]);
    racingGame.startRace();
    mockRandoms([0, 0, 0]);
    racingGame.startRace();
    mockRandoms([0, 0, 0]);
    racingGame.startRace();

    const winners = racingGame.getWinners();
    expect(winners).toEqual(['park', 'ji', 'seop']);
  });

  test('우승자가 1명일 때는 우승자만 반환합니다.', () => {
    const carNameList = ['harry', 'seop', 'park'];
    const racingGame = new RacingGame(carNameList, 2);

    mockRandoms([4, 3, 3]);
    racingGame.startRace();
    mockRandoms([4, 2, 2]);
    racingGame.startRace();

    const winners = racingGame.getWinners();
    expect(winners).toEqual(['harry']);
  });

  test('우승자가 여러 명일 때, 우승자 전부를 반환합니다.', () => {
    const carNameList = ['harry', 'seop', 'park'];
    const racingGame = new RacingGame(carNameList, 2);

    mockRandoms([4, 4, 2]);
    racingGame.startRace();
    mockRandoms([4, 4, 1]);
    racingGame.startRace();

    const winners = racingGame.getWinners();
    expect(winners).toEqual(['harry', 'seop']);
  });
});
