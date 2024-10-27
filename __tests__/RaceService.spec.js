import RaceService from '../src/service/RaceService.js';

describe('단위 테스트: RaceService 클래스', () => {
  let raceService;

  beforeEach(() => {
    const carNames = ['car1', 'car2'];
    raceService = new RaceService(carNames);
  });

  describe('performRaceRound', () => {
    test('한 번의 경주에 대하여 자동차 이름과 각 자동차 별 전진 횟수를 반환한다.', () => {
      // given
      const mockForwardCounts = [3, 4];
      jest.spyOn(raceService.car, 'validateForward').mockImplementation((_, carIndex) => {
        raceService.car.forwardCounts[carIndex] = mockForwardCounts[carIndex];
      });

      // when
      const results = raceService.performRaceRound();

      // then
      expect(results).toEqual([
        { carName: 'car1', forwardCount: 3 },
        { carName: 'car2', forwardCount: 4 }
      ]);
    });
  });

  describe('getRaceWinner', () => {
    test('경주의 최종 우승자 리스트를 반환한다.', () => {
      // given
      jest.spyOn(raceService.car, 'getWinnerList').mockReturnValue(['car1']);

      // when
      const winner = raceService.getRaceWinner();

      // then
      expect(winner).toBe('car1');
    });
  });
});