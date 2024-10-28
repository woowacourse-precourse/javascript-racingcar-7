import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

// 미리 정의된 입력값을 기반으로 테스트를 수행
const mockQuestions = (inputs) => {
  // jest.fn() 을 통해 가짜함수 생성
  MissionUtils.Console.readLineAsync = jest.fn();
  // mockImplementation을 통해 MissionUtils.Console.readLineAsync 재구성
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    // 제거한 input 값을 해결된 Promise로 감싸서 반환
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  // reduce의 각 호출에서 acc는 항상 MissionUtils.Random.pickNumberInRange로 유지
  // 각 호출에서 설정된 숫자가 순차적으로 반환
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

// getLogSpy 함수는 Jest의 스파이(spy) 기능을 활용하여 특정 함수의 호출을 감시하고,
// 이후의 테스트에서 그 호출 결과를 확인할 수 있도록 준비하는 역할
const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 경주", () => {
  test("기능 테스트1", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "1"];
    const logs = ["pobi : -", "woni : ", "최종 우승자 : pobi"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);

    // App 클래스 내부에서 MissionUtils.Random.pickNumberInRange가 호출될 때마다,
    // 준비된 numbers 배열에서 하나씩 값을 반환
    mockRandoms([MOVING_FORWARD, STOP]);

    // when
    const app = new App();
    // App의 실행 과정에서 MissionUtils.Console.readLineAsync가 호출될 때마다
    // 미리 준비된 입력값이 순차적으로 Promise 형태로 반환
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("기능 테스트2", async () => {
    // given
    const inputs = ["pobi,woni", "2"];
    const logs = [
      "pobi : -",
      "woni : ",
      "pobi : --",
      "woni : ",
      "최종 우승자 : pobi",
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([4, 3, 4, 3]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("입력된 자동차 이름이 5자를 초과할때의 예외테스트", async () => {
    // given
    const inputs = ["pobi,javaji"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("입력된 자동차가 한대일 때 예외테스트", async () => {
    // given
    const inputs = ["pobi"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("자동차가 시작지점에 머물러있을 때 예외테스트", async () => {
    // given
    const inputs = ["pobi,woni", "1"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("시도횟수가 자연수가 아닐 때 예외테스트", async () => {
    // given
    const inputs = ["pobi,woni", "a"];

    mockQuestions(inputs);
    mockRandoms([3, 3]);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});
