import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

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
  // 입력 받기 테스트
  describe("입력 테스트", () => {
    test("정상적인 입력을 받아 게임을 시작할 수 있다", async () => {
      const inputs = ["pobi,woni", "3"];
      mockQuestions(inputs);
      const app = new App();
      await expect(app.run()).resolves.not.toThrow();
    });
  });

  // Car 클래스 테스트
  describe("Car 클래스 테스트", () => {
    test("이름이 5자를 초과하면 에러가 발생한다", async () => {
      const inputs = ["pobiii,woni", "3"];
      mockQuestions(inputs);
      const app = new App();
      await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("자동차가 전진하고 위치가 정상적으로 출력된다", async () => {
      const inputs = ["pobi,woni", "1"];
      const logSpy = getLogSpy();
      mockQuestions(inputs);
      mockRandoms([4, 3]);

      const app = new App();
      await app.run();

      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("pobi : -"));
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("woni : "));
    });
  });

  // RacingGame 클래스 테스트
  describe("RacingGame 클래스 테스트", () => {
    test("여러 라운드가 정상적으로 실행된다", async () => {
      const inputs = ["pobi,woni", "3"];
      const logSpy = getLogSpy();
      mockQuestions(inputs);
      mockRandoms([4, 4, 4, 3, 4, 3]);

      const app = new App();
      await app.run();

      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining("pobi : ---")
      );
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("woni : -"));
    });

    test("공동 우승자가 정상적으로 출력된다", async () => {
      const inputs = ["pobi,woni", "2"];
      const logSpy = getLogSpy();
      mockQuestions(inputs);
      mockRandoms([4, 4, 4, 4]);

      const app = new App();
      await app.run();

      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining("최종 우승자 : pobi, woni")
      );
    });

    test("시도 횟수가 숫자가 아니면 에러가 발생한다", async () => {
      const inputs = ["pobi,woni", "abc"];
      mockQuestions(inputs);
      const app = new App();
      await expect(app.run()).rejects.toThrow("[ERROR]");
    });
  });

  // 예외 케이스 테스트
  describe("예외 테스트", () => {
    test("이름에 공백이 있는 경우 공백을 제거한다.", async () => {
      const inputs = ["pobi , woni", "1"];
      mockQuestions(inputs);
      mockRandoms([4, 4]);
      const app = new App();
      await expect(app.run()).resolves.not.toThrow();
    });

    test("이름이 빈 값인 경우 에러가 발생한다", async () => {
      const inputs = ["pobi,,woni", "3"]; // 중간에 빈 값
      mockQuestions(inputs);
      const app = new App();
      await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("이름이 공백문자인 경우 에러가 발생한다", async () => {
      const inputs = ["pobi,  ,woni", "3"]; // 공백만 있는 경우
      mockQuestions(inputs);
      const app = new App();
      await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("이름이 쉼표로 시작하면 에러가 발생한다", async () => {
      const inputs = [",pobi,woni", "3"];
      mockQuestions(inputs);
      const app = new App();
      await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("이름이 쉼표로 끝나면 에러가 발생한다", async () => {
      const inputs = ["pobi,woni,", "3"];
      mockQuestions(inputs);
      const app = new App();
      await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("시도 횟수가 음수이면 에러가 발생한다", async () => {
      const inputs = ["pobi,woni", "-1"];
      mockQuestions(inputs);
      const app = new App();
      await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("시도 횟수가 0이면 에러가 발생한다", async () => {
      const inputs = ["pobi,woni", "0"];
      mockQuestions(inputs);
      const app = new App();
      await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("자동차가 한 대인 경우도 정상적으로 동작한다", async () => {
      const inputs = ["pobi", "1"];
      const logSpy = getLogSpy();
      mockQuestions(inputs);
      mockRandoms([4]);

      const app = new App();
      await app.run();

      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining("최종 우승자 : pobi")
      );
    });
  });
});
