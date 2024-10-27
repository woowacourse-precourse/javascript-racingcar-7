import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';

describe('자동차 경주 게임', () => {
  let logSpy;
  beforeEach(() => {
    logSpy = jest.spyOn(MissionUtils.Console, 'print');
    logSpy.mockClear();
  });

  // 사용자 입력을 모킹하는 함수
  const mockUserInput = inputs => {
    MissionUtils.Console.readLineAsync = jest.fn();
    MissionUtils.Console.readLineAsync.mockImplementation(() => {
      const input = inputs.shift();
      return Promise.resolve(input);
    });
  };

  // 랜덤 값을 모킹하는 함수
  const mockRandomValues = numbers => {
    MissionUtils.Random.pickNumberInRange = jest.fn();
    numbers.reduce(
      (acc, number) => acc.mockReturnValueOnce(number),
      MissionUtils.Random.pickNumberInRange,
    );
  };

  describe('게임 진행', () => {
    test('한 라운드 게임에서 한 명만 전진하는 경우', async () => {
      // Given
      const inputs = ['pobi,woni', '1'];
      const randomValues = [4, 3];
      const expectedLogs = ['pobi : -', 'woni : ', '최종 우승자 : pobi'];

      // When
      mockUserInput(inputs);
      mockRandomValues(randomValues);
      const app = new App();
      await app.run();

      // Then
      expectedLogs.forEach(log => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    });

    test('한 라운드 게임에서 공동 우승하는 경우', async () => {
      // Given
      const inputs = ['car1,car2', '1'];
      const randomValues = [4, 4];

      // When
      mockUserInput(inputs);
      mockRandomValues(randomValues);
      const app = new App();
      await app.run();

      // Then
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('car1 : -'));
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('car2 : -'));
      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining('최종 우승자 : car1,car2'),
      );
    });

    test('3라운드 게임에서 승자가 결정되는 경우', async () => {
      // Given
      const inputs = ['car1,car2', '3'];
      const randomValues = [4, 3, 3, 4, 4, 3];

      // When
      mockUserInput(inputs);
      mockRandomValues(randomValues);
      const app = new App();
      await app.run();

      // Then
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('car1 : --'));
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('car2 : -'));
      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining('최종 우승자 : car1'),
      );
    });
  });

  describe('입력값 검증', () => {
    test('자동차 이름이 5자를 초과하는 경우 에러 발생', async () => {
      // Given
      const inputs = ['pobi,toolongname'];
      mockUserInput(inputs);

      // When & Then
      const app = new App();
      await expect(app.run()).rejects.toThrow('[ERROR]');
    });

    test('자동차가 2대 미만인 경우 에러 발생', async () => {
      // Given
      const inputs = ['pobi'];
      mockUserInput(inputs);

      // When & Then
      const app = new App();
      await expect(app.run()).rejects.toThrow('[ERROR]');
    });

    test('시도 횟수가 음수인 경우 에러 발생', async () => {
      // Given
      const inputs = ['pobi,woni', '-1'];
      mockUserInput(inputs);

      // When & Then
      const app = new App();
      await expect(app.run()).rejects.toThrow('[ERROR]');
    });
  });
});
