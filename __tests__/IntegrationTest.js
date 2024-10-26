import { Console, Random } from "@woowacourse/mission-utils";
import App from "../src/App";
import { MESSAGES } from "../src/constants/index.js";

const mockInputs = (inputs) => {
  Console.readLineAsync = jest.fn(() => {
    const targetInput = inputs.shift();
    return Promise.resolve(targetInput);
  });
};

const mockRandomNumbers = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), Random.pickNumberInRange);
};

const getPrintLogSpy = () => {
  // 콘솔 객체의 print 메서드 감시하는 모의 함수 반환
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("예외 처리", () => {
  const { ERROR, DUPLICATE_CAR_NAME, INVALID_CAR_NAME_LENGTH, INVALID_TRY_COUNT } = MESSAGES;

  test("자동차 이름 중복 예외 처리", async () => {
    // given
    const inputs = ["a,b,a"];
    mockInputs(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(ERROR + DUPLICATE_CAR_NAME);
  });

  test("자동차 이름(1자 이상 5자 이하) 예외 처리", async () => {
    // given
    const inputs = ["a,abcdef"];
    mockInputs(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(ERROR + INVALID_CAR_NAME_LENGTH);
  });

  test("시도할 횟수 소수 예외 처리", async () => {
    // given
    const inputs = ["a,b", "1.1"];
    mockInputs(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(ERROR + INVALID_TRY_COUNT);
  });

  test("시도할 횟수 음수 예외 처리", async () => {
    // given
    const inputs = ["a,b", "-1"];
    mockInputs(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(ERROR + INVALID_TRY_COUNT);
  });
});

describe("자동차 경주", () => {
  test("기능 테스트", async () => {
    // given
    const inputs = ["a,b", "2"];
    const logs = ["\n실행 결과", "a : -\nb : \n", "a : -\nb : -\n", "최종 우승자 : a, b"];
    const logSpy = getPrintLogSpy();

    mockInputs(inputs);
    mockRandomNumbers([4, 3, 3, 4]);

    // when
    const app = new App();
    await app.run();

    // then

    logs.forEach((log, index) => {
      expect(log).toBe(logSpy.mock.calls[index][0]);
    });
  });
});
