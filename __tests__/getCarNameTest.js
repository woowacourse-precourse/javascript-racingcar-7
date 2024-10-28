import { MissionUtils } from '@woowacourse/mission-utils';
import getCarName from '../src/component/getCarName';

const mockQuestions = (inputs) => {
   MissionUtils.Console.readLineAsync = jest.fn();
   MissionUtils.Console.readLineAsync.mockImplementation(() => {
      const input = inputs.shift();
      return Promise.resolve(input);
   });
};

describe('getCarName', () => {
   beforeEach(() => {
      jest.clearAllMocks();
   });

   test('정상적인 자동차 이름 입력', async () => {
      // given
      mockQuestions(['pobi,woni']);
      // when
      const result = await getCarName();
      // then
      expect(result).toEqual(['pobi', 'woni']);
   });

   test('자동차 이름이 5자를 초과할 경우 예외 발생', async () => {
      // given
      mockQuestions(['pobi,javaji']); // 5자 초과 입력 모킹
      // when
      // then
      await expect(getCarName()).rejects.toThrow('[ERROR] 자동차 이름을 5자 이하로 작성해주세요');
   });

   test('입력이 없는 경우 예외 발생', async () => {
      // given
      mockQuestions(['']);
      // when
      // then
      await expect(getCarName()).rejects.toThrow('[ERROR] 자동차 이름을 입력해주세요');
   });
});
