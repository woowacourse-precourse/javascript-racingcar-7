import getNumberOfRaces from '../src/component/getNumberOfRaces';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
   MissionUtils.Console.readLineAsync = jest.fn();
   MissionUtils.Console.readLineAsync.mockImplementation(() => {
      const input = inputs.shift();
      return Promise.resolve(input);
   });
};

describe('getNumberOfRaces', () => {
   beforeEach(() => {
      jest.clearAllMocks(); // 각 테스트 이전에 모킹된 함수 호출 기록 초기화
   });

   test('정상적인 시도 횟수 입력', async () => {
      // given
      mockQuestions(['3']);
      // when
      const result = await getNumberOfRaces();
      // then
      expect(result).toBe('3');
   });

   test('입력이 없는 경우 예외 발생', async () => {
      // given
      mockQuestions(['']);
      // then
      await expect(getNumberOfRaces()).rejects.toThrow('[ERROR] 횟수가 입력되지 않았습니다');
   });

   test('숫자가 아닌 경우 예외 발생', async () => {
      // given
      mockQuestions(['abc']);
      // when
      // then
      await expect(getNumberOfRaces()).rejects.toThrow('[ERROR] 숫자로 입력해주세요');
   });

   test('음수 입력 시 예외 발생', async () => {
      // given
      mockQuestions(['-1']);
      // when
      // then
      await expect(getNumberOfRaces()).rejects.toThrow('[ERROR] 횟수는 양수로 작성해주세요');
   });
});
