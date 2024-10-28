import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { validateCarNames, validateAttempts} from "../src/App.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 경주", () => {
  test("기능 테스트", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "1"];
    const logs = ["pobi : -", "woni : ", "최종 우승자 : pobi"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, STOP]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
  
  describe("예외 처리 테스트", () => {
    test("자동차 이름이 6자 이상인 경우", () => {
      expect(() => validateCarNames("pobibibi")).toThrow('[ERROR] 자동차 이름은 5자 이하이어야 합니다.');
    });

    test("자동차 이름이 알파벳이 아닌 경우", () => {
      expect(() => validateCarNames("p121")).toThrow('[ERROR] 자동차 이름은 알파벳만 포함해야 합니다.');
    });

    test("자동차 이름이 중복된 경우", () => {
      const names = ["pobi", "woni", "pobi"];
      expect(() => validateCarNames(names)).toThrow('[ERROR] 자동차 이름은 중복될 수 없습니다.');
    });

    test("입력이 비어 있는 경우 - 자동차 이름", () => {
      expect(() => validateCarName("", "carNames")).toThrow('[ERROR] 자동차 이름을 입력해야 합니다.');
    });

    test("이동 횟수가 유효하지 않은 경우", () => {
      expect(() => validateAttempts(0)).toThrow('[ERROR] 유효한 이동 횟수를 입력해야 합니다.');
    });

});

