import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { getCarsInfo, getCountInfo, printStage, printWinners } from '../utils/inout.js';
import { moveOrNot, playerMovingState, startRacing } from '../utils/racing.js';

jest.mock("@woowacourse/mission-utils", () => ({
  Console: {
    readLineAsync: jest.fn(),
    print: jest.fn(),
  },
  Random: {
    pickNumberInRange: jest.fn(),
  }
}));

jest.mock('../utils/inout.js', () => ({
  getCarsInfo: jest.fn(),
  getCountInfo: jest.fn(),
  printStage: jest.fn(),
  printWinners: jest.fn(),
}));

jest.mock('../utils/racing.js', () => ({
  moveOrNot: jest.fn(),
  playerMovingState: jest.fn(),
  startRacing: jest.fn(),
}));

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange.mockImplementation(() => {
    return numbers.shift();
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 경주 통합 테스트", () => {
  afterEach(() => {
    jest.clearAllMocks();  // 각 테스트 후 모킹을 초기화
  });

  describe("App 기능 테스트", () => {
    test("기능 테스트", async () => {
      const MOVING_FORWARD = 4;
      const STOP = 3;
      const inputs = ["pobi,woni", "1"];
      const logs = ["pobi : -", "woni : ", "최종 우승자 : pobi"];
      const logSpy = getLogSpy();

      mockQuestions(inputs);
      mockRandoms([MOVING_FORWARD, STOP]);

      const app = new App();
      await app.run();

      logs.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    });

    test("예외 테스트", async () => {
      const inputs = ["pobi,javaji"];  // 잘못된 자동차 이름 입력
      mockQuestions(inputs);

      const app = new App();

      await expect(app.run()).rejects.toThrow("[ERROR]");  // 예외 테스트
    });
  });

  describe("inout 모듈 테스트", () => {
    describe('getCarsInfo', () => {
      it('문자열을 입력받아 배열로 반환한다', async () => {
        MissionUtils.Console.readLineAsync.mockResolvedValueOnce('car1,car2,car3');
        const cars = await getCarsInfo(); 
        expect(cars).toEqual(['car1', 'car2', 'car3']);
      });

      it('입력값이 비어있는 경우', async () => {
        MissionUtils.Console.readLineAsync.mockResolvedValueOnce('');
        await expect(getCarsInfo()).rejects.toThrow('[ERROR] 유효하지 않은 입력입니다.');
      });

      it('글자수 5자 제한', async () => {
        MissionUtils.Console.readLineAsync.mockResolvedValueOnce('carcar1,car2');
        await expect(getCarsInfo()).rejects.toThrow('[ERROR] 유효하지 않은 입력입니다.');
      });
    });

    describe('getCountInfo', () => {
      it('숫자를 입력받아 반환', async () => {
        MissionUtils.Console.readLineAsync.mockResolvedValueOnce('5');
        const count = await getCountInfo();
        expect(count).toBe(5);
      });

      it('입력값이 비어있는 경우', async () => {
        MissionUtils.Console.readLineAsync.mockResolvedValueOnce('');
        await expect(getCountInfo()).rejects.toThrow('[ERROR] 유효하지 않은 입력입니다.');
      });

      it('숫자가 아닌 경우 예외 발생', async () => {
        MissionUtils.Console.readLineAsync.mockResolvedValueOnce('abc');
        await expect(getCountInfo()).rejects.toThrow('[ERROR] 유효하지 않은 입력입니다.');
      });

      it('0 또는 음수 입력 시 예외 발생', async () => {
        MissionUtils.Console.readLineAsync.mockResolvedValueOnce('-1');
        await expect(getCountInfo()).rejects.toThrow('[ERROR] 유효하지 않은 입력입니다.');
      });
    });

    describe('printStage', () => {
      it('시도별 결과 출력', () => {
        const carMap = new Map([
          ['car1', 3],
          ['car2', 5],
          ['car3', 2],
        ]);

        printStage(carMap);

        expect(MissionUtils.Console.print).toHaveBeenCalledWith('car1 : ---');
        expect(MissionUtils.Console.print).toHaveBeenCalledWith('car2 : -----');
        expect(MissionUtils.Console.print).toHaveBeenCalledWith('car3 : --');
        expect(MissionUtils.Console.print).toHaveBeenCalledWith('');
      });
    });

    describe('printWinners', () => {
      it('우승자 출력', () => {
        const winners = ['car1', 'car3'];
        printWinners(winners);
        expect(MissionUtils.Console.print).toHaveBeenCalledWith('최종 우승자 : car1, car3');
      });
    });
  });

  describe("racing 모듈 테스트", () => {
    describe('moveOrNot', () => {
      it('1칸 전진', () => {
        MissionUtils.Random.pickNumberInRange.mockReturnValueOnce(4);
        expect(moveOrNot()).toBe(1);

        MissionUtils.Random.pickNumberInRange.mockReturnValueOnce(5);
        expect(moveOrNot()).toBe(1);
      });

      it('현재 위치 유지', () => {
        MissionUtils.Random.pickNumberInRange.mockReturnValueOnce(0);
        expect(moveOrNot()).toBe(0);
      });
    });

    describe('playerMovingState', () => {
      it('자동차 진행 상태', () => {
        MissionUtils.Random.pickNumberInRange.mockReturnValueOnce(5);  // 전진
        MissionUtils.Random.pickNumberInRange.mockReturnValueOnce(3);  // 멈춤

        const carMap = new Map([
          ['car1', 0],
          ['car2', 0]
        ]);

        const updatedMap = playerMovingState(carMap);

        expect(updatedMap.get('car1')).toBe(1);  // 전진
        expect(updatedMap.get('car2')).toBe(0);  // 멈춤
      });
    });

    describe('startRacing', () => {
      it('경주 결과(공동 우승)', () => {
        MissionUtils.Random.pickNumberInRange.mockReturnValue(5);  // 모든 자동차가 전진

        const carArray = ['car1', 'car2'];
        const count = 3;

        startRacing(carArray, count);

        expect(printStage).toHaveBeenCalledTimes(count);
        expect(printWinners).toHaveBeenCalledWith(['car1', 'car2']);
      });
    });
  });
});