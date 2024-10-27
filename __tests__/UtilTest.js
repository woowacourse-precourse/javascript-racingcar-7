import { MissionUtils } from "@woowacourse/mission-utils";
import View from "../src/View/View.js";
import { Car } from "../src/Model/Car.js";
import { ParseUtils } from "../src/Util/ParseUtils.js";
import { Validator } from "../src/Validator/Validator.js";
import { ERROR_MSG } from "../src/Constant/Constants.js";

describe("View Tests", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log");
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("View Winner Test", () => {
    const view = new View();

    view.outputWinner(["pobi", "rupi", "wolf"]);

    expect(consoleSpy).toHaveBeenCalledWith("최종 우승자 : pobi, rupi, wolf");
  });

  test("Car Move Test", () => {
    const car = new Car("pobi");
    const mockRandom = jest.spyOn(MissionUtils.Random, "pickNumberInRange");

    mockRandom
      .mockReturnValueOnce(5)
      .mockReturnValueOnce(1)
      .mockReturnValueOnce(7);

    const result1 = car.moveForward();
    expect(result1).toBe(1);

    const result2 = car.moveForward();
    expect(result2).toBe(1);

    const result3 = car.moveForward();
    expect(result3).toBe(2);
  });

  test("View Result Test", () => {
    const view = new View();
    const car1 = new Car("pobi");
    const car2 = new Car("rupi");

    const mockRandom = jest.spyOn(MissionUtils.Random, "pickNumberInRange");
    mockRandom.mockReturnValue(5);

    car1.moveForward();
    car1.moveForward();
    car2.moveForward();

    view.outputResult([car1, car2]);

    expect(consoleSpy).toHaveBeenNthCalledWith(1, "실행 결과");
    expect(consoleSpy).toHaveBeenNthCalledWith(2, "pobi : --");
    expect(consoleSpy).toHaveBeenNthCalledWith(3, "rupi : -");
  });
});

test("ParseUtils Test - parseDistanceToDash", () => {
  const result = ParseUtils.parseDistanceToDash(3);

  expect(result).toBe("---");
});

describe("Validator Test", () => {
  let validator;

  beforeEach(() => {
    validator = Validator();
  });

  test("자동차 이름이 최소 2개 이상 입력해야 합니다.", () => {
    expect(() => {
      validator.validateInputCarNameFormat("하하");
    }).toThrow(ERROR_MSG.ERROR_INPUT_NUM_CAR);
  });

  test("자동차 이름은 ,로 시작할 수 없어요. (1) - 첫번째 자동차 이름", () => {
    expect(() => {
      validator.validateInputCarNameFormat(",하하,후후후후후");
    }).toThrow(ERROR_MSG.ERROR_INPUT_CAR_COMMA);
  });

  test("자동차 이름은 ,로 시작할 수 없어요. (2) - 첫번째 이후 자동차 이름", () => {
    expect(() => {
      validator.validateInputCarNameFormat("하하,,후후후후후");
      validator.validateInputCarNameFormat("하하,,후후후후");
    }).toThrow(ERROR_MSG.ERROR_INPUT_CAR_COMMA);
  });

  test("자동차 이름은 5글자 이하만 가능해요. (1) - 평범한 이름", () => {
    expect(() => {
      validator.validateInputCarNameFormat("하하하하하하,흐흐흐흐");
    }).toThrow(ERROR_MSG.ERROR_INPUT_CAR_NAME_LENGTH);
  });

  test("자동차 이름은 5글자 이하만 가능해요. (2) - 특수한 이름", () => {
    expect(validator.validateInputCarNameFormat("!@#!@,    ")).toBe(undefined);
  });

  test("시도 횟수는 숫자만 입력 가능해요.", () => {
    expect(() => {
      validator.validateInputNumOfAttempts("!");
    }).toThrow(ERROR_MSG.ERROR_INPUT_WITH_ATTEMPTS_NUMBER);
  });

  test("시도 횟수는 1이상의 값만 가능해요.", () => {
    expect(() => {
      validator.validateInputNumOfAttempts("-1");
    }).toThrow(ERROR_MSG.ERROR_INPUT_WITH_ATTEMPTS_PLUS);
  });
});
