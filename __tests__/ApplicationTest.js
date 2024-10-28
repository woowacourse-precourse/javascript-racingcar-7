import App from "../src/App.js";
import { 
  inputCarsNameWithDelimeter, 
  splitCarsName, 
  checkNameUnique, 
  checkNameValid,
  inputTrialNumber,
  isNumberValid,
  printCurrentResult,
} from "../src/App.js";
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

// checkNameValid 함수 테스트 코드
describe("자동차 경주", () => {
  test("checkNameValid - 모든 이름이 유효할 때 true 반환", () => {
    // given
    const validCars = ["car1", "race", "win"];

    // when
    const result = checkNameValid(validCars);

    // then
    expect(result).toBe(true);
  });

  test("checkNameValid - 이름에 5자 초과가 포함될 때 false 반환", () => {
    // given
    const invalidCars = ["longname", "win", "speedster"];

    // when
    const result = checkNameValid(invalidCars);

    // then
    expect(result).toBe(false);
  });

  test("checkNameValid - 이름에 특수문자나 공백이 포함될 때 false 반환", () => {
    // given
    const invalidCarsWithSpecialChars = ["car!", "win ", "speed"];

    // when
    const result = checkNameValid(invalidCarsWithSpecialChars);

    // then
    expect(result).toBe(false);
  });
});

// isNumberValid, inputTrialNumber 함수 테스트 코드
describe("자동차 경주", () => {
  // isNumberValid 테스트
  test("isNumberValid - 1 이상의 정수를 입력받으면 true 반환", () => {
    expect(isNumberValid(1)).toBe(true);
    expect(isNumberValid(3)).toBe(true);
  });

  test("isNumberValid - 1 미만이거나 정수가 아니면 false 반환", () => {
    expect(isNumberValid(0)).toBe(false);
    expect(isNumberValid(-1)).toBe(false);
    expect(isNumberValid(1.5)).toBe(false);
    expect(isNumberValid("3")).toBe(false); // 문자열일 경우
  });

  // inputTrialNumber 함수 테스트
  test("inputTrialNumber - 1 이상의 숫자 입력 시 해당 숫자 반환", async () => {
    // given
    const inputs = ["3"];
    mockQuestions(inputs);

    // when
    const result = await inputTrialNumber();

    // then
    expect(result).toBe(3);
  });

  test("inputTrialNumber - 1 미만의 숫자 입력 시 예외 발생", async () => {
    // given
    const inputs = ["0"];
    mockQuestions(inputs);

    // when, then
    await expect(inputTrialNumber()).rejects.toThrow("[ERROR]");
  });

  test("inputTrialNumber - 숫자가 아닌 값 입력 시 예외 발생", async () => {
    // given
    const inputs = ["invalid"];
    mockQuestions(inputs);

    // when, then
    await expect(inputTrialNumber()).rejects.toThrow("[ERROR]");
  });
});

// printCurrentResult 함수 테스트 코드
describe("printCurrentResult 함수", () => {
  test("자동차 진행 상황이 예상대로 출력된다", () => {
    // given
    const gameResult = [
      { name: "car1", position: 2 },
      { name: "car2", position: 1 },
      { name: "car3", position: 3 },
    ];

    const logSpy = getLogSpy(); // Console.print 감지

    // when
    printCurrentResult(gameResult);

    // then
    expect(logSpy).toHaveBeenCalledWith("car1 : --");
    expect(logSpy).toHaveBeenCalledWith("car2 : -");
    expect(logSpy).toHaveBeenCalledWith("car3 : ---");

    logSpy.mockRestore(); // 스파이 복원
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
