import App from '../src/App';
import { Console, Random } from '@woowacourse/mission-utils';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    print: jest.fn(),
    readLineAsync: jest.fn(),
  },
  Random: {
    pickNumberInRange: jest.fn(),
  },
}));

describe('자동차 경주 게임', () => {
  let app;

  beforeEach(() => {
    app = new App();
    jest.clearAllMocks();
  });

  describe('입력값 파싱 테스트', () => {
    test('쉼표로 구분된 문자열을 배열로 변환한다', () => {
      const input = 'pobi,woni,jun';
      const expected = ['pobi', 'woni', 'jun'];
      expect(app.parse_input(input)).toEqual(expected);
    });

    test('입력값 앞뒤 공백을 제거한다', () => {
      const input = ' pobi , woni , jun ';
      const expected = ['pobi', 'woni', 'jun'];
      expect(app.parse_input(input)).toEqual(expected);
    });
  });

  describe('이름 유효성 검사', () => {
    test('유효한 이름 목록은 true를 반환한다', () => {
      const names = ['pobi', 'woni', 'jun'];
      expect(app.validate_name(names)).toBe(true);
    });

    test.each([[''], [' '], ['123456']])(
      '유효하지 않은 이름이 있으면 에러를 발생시킨다',
      (invalidName) => {
        const names = ['pobi', invalidName, 'jun'];
        expect(() => {
          app.validate_name(names);
        }).toThrow('[ERROR]');
      }
    );
  });

  describe('랜덤 숫자 생성', () => {
    test('0에서 9 사이의 숫자를 반환한다', () => {
      Random.pickNumberInRange.mockReturnValue(5);
      expect(app.get_random_number()).toBe(5);
      expect(Random.pickNumberInRange).toHaveBeenCalledWith(0, 9);
    });
  });

  describe('우승자 결정', () => {
    beforeEach(() => {
      app.name_list = ['pobi', 'woni', 'jun'];
    });

    test('가장 많이 전진한 자동차의 이름을 반환한다', () => {
      app.race_result = [3, 1, 2];
      expect(app.get_race_winner()).toEqual(['pobi']);
    });

    test('동일한 거리를 달린 자동차들이 있으면 모두 우승자가 된다', () => {
      app.race_result = [3, 3, 2];
      expect(app.get_race_winner()).toEqual(['pobi', 'woni']);
    });
  });

  describe('경주 진행', () => {
    beforeEach(() => {
      app.name_list = ['pobi', 'woni'];
      app.race_result = [0, 0];
    });

    test('4 이상의 랜덤 값을 받으면 전진한다', () => {
      Random.pickNumberInRange.mockReturnValueOnce(4).mockReturnValueOnce(3);

      app.start_race();
      expect(app.race_result).toEqual([1, 0]);
    });

    test('모든 자동차가 움직이지 않을 수 있다', () => {
      Random.pickNumberInRange.mockReturnValue(3);

      app.start_race();
      expect(app.race_result).toEqual([0, 0]);
    });
  });

  describe('경주 결과 출력', () => {
    test('각 자동차의 현재 위치를 출력한다', () => {
      app.name_list = ['pobi', 'woni'];
      app.race_result = [2, 1];

      app.print_race_process();

      expect(Console.print).toHaveBeenCalledWith('pobi : --');
      expect(Console.print).toHaveBeenCalledWith('woni : -');
      expect(Console.print).toHaveBeenCalledWith('');
    });
  });

  describe('전체 게임 실행', () => {
    test('정상적인 게임 진행', async () => {
      Console.readLineAsync
        .mockResolvedValueOnce('pobi,woni')
        .mockResolvedValueOnce('3');

      Random.pickNumberInRange.mockReturnValue(4);

      await app.run();

      expect(app.name_list).toEqual(['pobi', 'woni']);
      expect(app.try_count).toBe(3);
      expect(Console.print).toHaveBeenCalledWith('실행 결과');
      expect(Console.print).toHaveBeenCalledWith(
        expect.stringContaining('최종 우승자')
      );
    });

    test('잘못된 이름 입력시 에러 발생', async () => {
      Console.readLineAsync
        .mockResolvedValueOnce('pobi,toolongname')
        .mockResolvedValueOnce('3');

      await expect(app.run()).rejects.toThrow('[ERROR]');
    });
  });
});
