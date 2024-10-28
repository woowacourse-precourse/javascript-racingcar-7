import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => Promise.resolve(inputs));
};

describe("getCars 함수 테스트", () => {
  test("정상 입력 - 자동차 이름을 쉼표로 구분하여 반환", async () => {
    const app = new App();
    mockQuestions("pobi,woni");
    const cars = await app.getCars();
    expect(cars).toEqual(["pobi", "woni"]);
  });

  test("예외 입력 - 자동차 이름 길이 초과", async () => {
    const app = new App();
    mockQuestions("pobi,javaji"); 
    await expect(app.getCars()).rejects.toThrow("[ERROR]");
  });

  test("예외 입력 - 중복된 자동차 이름", async () => {
    const app = new App();
    mockQuestions("pobi,pobi");
    await expect(app.getCars()).rejects.toThrow("[ERROR]");
  });
});

describe("getAttemptCount 함수 테스트", () => {
  test("정상 입력 - 자연수 입력", async () => {
    const app = new App();
    mockQuestions("3");
    const attemptCount = await app.getAttemptCount();
    expect(attemptCount).toBe(3);
  });

  test.each(["abc", "-1", ""])(
    "예외 입력 - 자연수 아닌 값이 입력된 경우",
    async (input) => {
      const app = new App();
      mockQuestions(input);
      await expect(app.getAttemptCount()).rejects.toThrow("[ERROR]");
    }
  );
});

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), MissionUtils.Random.pickNumberInRange);
};

describe("startRound 함수 테스트", () => {
  test("자동차가 랜덤 값에 따라 이동", () => {
    const app = new App();
    const carsName = ["pobi", "woni"];
    const carsState = ["", ""];
    const logSpy = jest.spyOn(MissionUtils.Console, "print");

    mockRandoms([4, 3]);
    app.startRound(carsName, carsState);

    expect(carsState).toEqual(["-", ""]);
    expect(logSpy).toHaveBeenCalledWith("pobi : -");
    expect(logSpy).toHaveBeenCalledWith("woni : ");
  });
});

describe("getFinalWinner 함수 테스트", () => {
  test("최종 우승자가 한 명인 경우", () => {
    const app = new App();
    const carsName = ["pobi", "woni"];
    const carsState = ["--", "-"];
    const winner = app.getFinalWinner(carsName, carsState);

    expect(winner).toBe("pobi");
  });

  test("최종 우승자가 여러 명인 경우", () => {
    const app = new App();
    const carsName = ["pobi", "woni"];
    const carsState = ["--", "--"];
    const winner = app.getFinalWinner(carsName, carsState);

    expect(winner).toBe("pobi, woni");
  });
});
