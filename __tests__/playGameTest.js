import playGame from '../src/component/playGame.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
   MissionUtils.Random.pickNumberInRange = jest.fn();
   numbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
   }, MissionUtils.Random.pickNumberInRange);
};

describe('playGame', () => {
   beforeEach(() => {
      jest.clearAllMocks(); // 각 테스트 이전에 모킹된 함수 호출 기록 초기화
   });

   test('경주 결과 확인', async () => {
      // given
      const cars = ['pobi', 'woni', 'jun'];
      const numberOfRaces = 3;
      mockRandoms([4, 4, 4]); // 모두 전진
      // when
      const winners = await playGame(cars, numberOfRaces);
      // then
      expect(winners).toEqual(['pobi', 'woni', 'jun']); // 모든 자동차 우승
   });

   test('랜덤 값에 따라 경주 결과 변경', async () => {
      // given
      const cars = ['pobi', 'woni'];
      const numberOfRaces = 2;
      mockRandoms([4, 3, 4, 4]); // pobi 전진, woni 정지, pobi 전진, woni 전진
      // when
      const winners = await playGame(cars, numberOfRaces);
      // then
      expect(winners).toEqual(['pobi']); // pobi 우승
   });
});
