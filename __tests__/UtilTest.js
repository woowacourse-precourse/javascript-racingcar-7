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

test("Validator Test", () => {
  const { validateInputCarNameFormat, validateInputNumOfAttempts } =
    Validator();

  const errorCaseWithNumOfCar = validateInputCarNameFormat("하하");
  const errorCaseWithCarNameLength1 =
    validateInputCarNameFormat("하하하하하,후후후후후후");
  const errorCaseWithCarNameLength2 =
    validateInputCarNameFormat("하하하하하, 후후후후후");
  const errorCaseWithCarNameWithComma1 =
    validateInputCarNameFormat(",하하하하,히히히히히");
  const errorCaseWithCarNameWithComma2 =
    validateInputCarNameFormat("하하하하하,,히히히");
  const errorCaseWithAttemptsNaN1 = validateInputNumOfAttempts("하하");
  const errorCaseWithAttemptsNaN2 = validateInputNumOfAttempts("2");

  expect(errorCaseWithNumOfCar).toBe(ERROR_MSG.ERROR_INPUT_NUM_CAR);
  expect(errorCaseWithCarNameLength1).toBe(
    ERROR_MSG.ERROR_INPUT_CAR_NAME_LENGTH
  );
  expect(errorCaseWithCarNameLength2).toBe(
    ERROR_MSG.ERROR_INPUT_CAR_NAME_LENGTH
  );
  expect(errorCaseWithCarNameWithComma1).toBe(ERROR_MSG.ERROR_INPUT_CAR_COMMA);
  expect(errorCaseWithCarNameWithComma2).toBe(ERROR_MSG.ERROR_INPUT_CAR_COMMA);
  expect(errorCaseWithAttemptsNaN1).toBe(ERROR_MSG.ERROR_INPUT_WITH_ATTEMPTS);
  expect(errorCaseWithAttemptsNaN2).toBe(undefined);
});
