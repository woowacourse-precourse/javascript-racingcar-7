import App from "../src/App.js";
import { inputCarsNameWithDelimeter, splitCarsName, checkNameUnique } from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

// inputCarsNameWithDelimeter 함수 테스트 코드
describe("자동차 경주", () => {
  test("inputCarsNameWithDelimeter - 자동차 이름을 쉼표로 구분하여 입력받기", async () => {
    // given
    const inputs = ["cars1,cars2,cars3"];
    mockQuestions(inputs);

    // when
    const carNames = await inputCarsNameWithDelimeter(); // inputCarsNameWithDelimeter 함수를 직접 호출

    // then
    expect(carNames).toBe("cars1,cars2,cars3");
  });
});

// splitCarsName 함수 테스트 코드
describe("자동차 경주", () => {
  test("splitCarsName - 쉼표로 구분된 자동차 이름을 배열로 반환", () => {
    // given
    const inputString = "car1,car2,car3";
    const expectedOutput = ["car1", "car2", "car3"];

    // when
    const result = splitCarsName(inputString);

    // then
    expect(result).toEqual(expectedOutput);
  });
});

// checkNameUnique 함수 테스트 코드
describe("자동차 경주", () => {
  test("checkNameUnique - 중복된 이름이 없으면 true 반환", () => {
    // given
    const cars = ["car1", "car2", "car3"];

    // when
    const result = checkNameUnique(cars);

    // then
    expect(result).toBe(true);
  });

  test("checkNameUnique - 중복된 이름이 있으면 false 반환", () => {
    // given
    const carsWithDuplicates = ["car1", "car2", "car1"];

    // when
    const result = checkNameUnique(carsWithDuplicates);

    // then
    expect(result).toBe(false);
  });
});

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

  test("예외 테스트", async () => {
    // given
    const inputs = ["pobi,javaji"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});
