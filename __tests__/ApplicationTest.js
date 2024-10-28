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
    test('5라운드 게임에서 세 명이 경주하는 경우', async () => {
      // Given
      const inputs = ['pobi,woni,jun', '5'];
      const randomValues = [
        4,
        3,
        4, // 1라운드
        4,
        4,
        3, // 2라운드
        3,
        4,
        4, // 3라운드
        4,
        3,
        4, // 4라운드
        4,
        4,
        4, // 5라운드
      ];

      // When
      mockUserInput(inputs);
      mockRandomValues(randomValues);
      const app = new App();
      await app.run();

      // Then
      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining('pobi : ----'),
      );
      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining('woni : ---'),
      );
      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining('jun : ----'),
      );
      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining('최종 우승자 : pobi,jun'),
      );
    });

    test('모든 자동차가 움직이지 않는 경우', async () => {
      // Given
      const inputs = ['car1,car2,car3', '1'];
      const randomValues = [3, 3, 3];

      // When
      mockUserInput(inputs);
      mockRandomValues(randomValues);
      const app = new App();
      await app.run();

      // Then
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('car1 : '));
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('car2 : '));
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('car3 : '));
    });

    test('세 명의 공동 우승자가 나오는 경우', async () => {
      // Given
      const inputs = ['car1,car2,car3,car4', '2'];
      const randomValues = [4, 4, 4, 3, 4, 4, 4, 3];

      // When
      mockUserInput(inputs);
      mockRandomValues(randomValues);
      const app = new App();
      await app.run();

      // Then
      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining('최종 우승자 : car1,car2,car3'),
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
    test('쉼표만 입력된 경우 에러 발생', async () => {
      // Given
      const inputs = [','];
      mockUserInput(inputs);

      // When & Then
      const app = new App();
      await expect(app.run()).rejects.toThrow('[ERROR]');
    });

    test('이름 사이에 공백이 있는 경우 에러 발생', async () => {
      // Given
      const inputs = ['pobi, woni'];
      mockUserInput(inputs);

      // When & Then
      const app = new App();
      await expect(app.run()).rejects.toThrow('[ERROR]');
    });

    test('빈 이름이 포함된 경우 에러 발생', async () => {
      // Given
      const inputs = ['pobi,,woni'];
      mockUserInput(inputs);

      // When & Then
      const app = new App();
      await expect(app.run()).rejects.toThrow('[ERROR]');
    });

    test('시도 횟수가 숫자가 아닌 경우 에러 발생', async () => {
      // Given
      const inputs = ['pobi,woni', 'abc'];
      mockUserInput(inputs);

      // When & Then
      const app = new App();
      await expect(app.run()).rejects.toThrow('[ERROR]');
    });

    test('시도 횟수가 0인 경우 에러 발생', async () => {
      // Given
      const inputs = ['pobi,woni', '0'];
      mockUserInput(inputs);

      // When & Then
      const app = new App();
      await expect(app.run()).rejects.toThrow('[ERROR]');
    });
  });
});
