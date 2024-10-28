import ConsoleInput from '../../src/presentation/ConsoleInput.js';
import { MissionUtils } from '@woowacourse/mission-utils';

describe('Console Input Class 테스트', () => {
  const mockReadLineAsync = (input) => {
    MissionUtils.Console.readLineAsync = jest.fn().mockResolvedValue(input);
  };

  describe('readCarsName 메서드 테스트', () => {
    test('readCarsName 메서드가 올바른 프롬프트 메시지를 출력하는지 확인', async () => {
      // given
      const input = 'pobi, woni , jun';
      const expectedPrompt = '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n';
      mockReadLineAsync(input);

      // when
      const readLineSpy = jest.spyOn(MissionUtils.Console, 'readLineAsync');
      await ConsoleInput.readCarsName();

      // then
      expect(readLineSpy).toHaveBeenCalledWith(expectedPrompt);
    });

    test('readCarsName 메서드가 입력받은 문자열을 반환하는지 확인', async () => {
      // given
      const testCases = [
        { input: '', expected: '' },
        { input: 'car1,car2,car3', expected: 'car1,car2,car3' },
        { input: ' pobi, woni , jun ', expected: ' pobi, woni , jun ' },
        { input: ',,,,', expected: ',,,,' },
        { input: 'hello', expected: 'hello' },
      ];

      for (const { input, expected } of testCases) {
        // when
        mockReadLineAsync(input);
        const result = await ConsoleInput.readCarsName();

        // then
        expect(result).toBe(expected);
      }
    });
  });

  describe('readTargetRound 메서드 테스트', () => {
    test('readTargetRound 메서드가 올바른 프롬프트 메시지를 출력하는지 확인', async () => {
      // given
      const input = '5';
      const expectedPrompt = '시도할 횟수는 몇 회인가요?\n';
      mockReadLineAsync(input);

      // when
      const readLineSpy = jest.spyOn(MissionUtils.Console, 'readLineAsync');
      await ConsoleInput.readTargetRound();

      // then
      expect(readLineSpy).toHaveBeenCalledWith(expectedPrompt);
    });

    test('readTargetRound 메서드가 입력받은 문자열을 반환하는지 확인', async () => {
      // given
      const testCases = [
        { input: '', expected: '' },
        { input: '5', expected: '5' },
        { input: '-3', expected: '-3' },
        { input: '1.5', expected: '1.5' },
        { input: 'abc', expected: 'abc' },
        { input: ' 10 ', expected: ' 10 ' },
        { input: '0', expected: '0' },
        { input: '999999', expected: '999999' },
      ];

      for (const { input, expected } of testCases) {
        // when
        mockReadLineAsync(input);
        const result = await ConsoleInput.readTargetRound();

        // then
        expect(result).toBe(expected);
      }
    });
  });
});
