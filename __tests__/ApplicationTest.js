import App from "../src/App.js";
import MissionUtils from "@woowacourse/mission-utils";

// MissionUtils 모듈을 Jest 모의(Mock) 처리
jest.mock("@woowacourse/mission-utils", () => ({
  Console: {
    readLine: jest.fn(),
    print: jest.fn(),
    close: jest.fn(),
  },
  Random: {
    pickNumberInRange: jest.fn(),
  },
}));

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLine.mockImplementation((question, callback) => {
    const input = inputs.shift();
    callback(input); // 입력을 콜백에 전달
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange.mockImplementation(() => {
    return numbers.shift();
  });
};

const getLogSpy = () => {
  const logSpy = MissionUtils.Console.print;
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 경주 추가 테스트", () => {
  test("이동 횟수가 유효하지 않은 경우 예외 처리", () => {
    // given
    const inputs = ["pobi,woni,jun", "0"]; // 0회 입력은 유효하지 않음
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    expect(() => app.run()).toThrow(
      "[ERROR] 이동 횟수는 1 이상의 정수여야 합니다."
    );
  });

  test("자동차 이름이 공백이거나 너무 긴 경우 예외 처리", () => {
    // given
    const inputs = ["pobi,,jun", "3"]; // 빈 이름이 포함된 경우
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    expect(() => app.run()).toThrow(
      "[ERROR] 각 자동차 이름은 1자 이상 5자 이하이어야 합니다."
    );
  });

  test("자동차 이름이 5대 이상 입력된 경우 예외 처리", () => {
    // given
    const inputs = ["pobi,woni,jun,woo,kakao,naver", "3"]; // 5대 이상
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    expect(() => app.run()).toThrow(
      "[ERROR] 자동차는 최대 5대까지 입력 가능합니다."
    );
  });

  test("동일한 점수로 여러 우승자가 있는 경우", () => {
    // given
    const inputs = ["pobi,woni,jun", "2"];
    const logs = [
      "1 차시:",
      "pobi : -",
      "woni : -",
      "jun : -",
      "2 차시:",
      "pobi : --",
      "woni : --",
      "jun : --",
      "최종 우승자 : pobi, woni, jun",
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([4, 4, 4, 4, 4, 4]); // 모두 전진하도록 설정

    // when
    const app = new App();
    app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("자동차 이름에 중복된 이름이 있는 경우 예외 처리", () => {
    // given
    const inputs = ["pobi,pobi,jun", "3"]; // 중복된 이름 입력
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    expect(() => app.run()).toThrow("[ERROR] 자동차 이름에 중복이 있습니다.");
  });
});
