import InputHandler from "../src/InputHandler.js";
import Car from "../src/Car.js";
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
  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), MissionUtils.Random.pickNumberInRange);
};

describe("자동차 이름 입력 기능 테스트", () => {
  test("정상적으로 자동차 이름을 입력받는다", async () => {
    const inputs = ["pobi,woni,java"];
    mockQuestions(inputs);

    const inputHandler = new InputHandler();
    const carNames = await inputHandler.readCarsName();

    expect(carNames).toEqual("pobi,woni,java");  // 예상한 입력값 확인
  });

  //예외 테스트
  test.each([
    ["pobi,javaji"],            // 6자 이상인 경우
    ["pobi, ,java"],            // 공백이 포함된 경우
    ["pobi"],                   // 이름이 하나만 입력된 경우
    [""]                        // 공백만 입력된 경우
  ])("입력 값 '%s'에 대해 예외가 발생한다", async (input) => {
    mockQuestions([input]);

    const inputHandler = new InputHandler();

    await expect(inputHandler.readCarsName()).rejects.toThrow("[ERROR]");
  });
});

describe("시도 횟수 입력 기능 테스트", () => {
  test("정상적으로 시도 횟수를 입력받는다", async () => {
    const inputs = ["5"];
    mockQuestions(inputs);

    const inputHandler = new InputHandler();
    const attemptCount = await inputHandler.readAttemptCount();

    expect(attemptCount).toBe(5);  // 입력값이 정상적으로 변환되었는지 확인
  });

  // 예외 테스트
  test.each([
    ["", "[ERROR] 공백이 입력되었습니다."],         // 공백 입력
    ["abc", "[ERROR] 숫자를 입력해주세요."],         // 숫자가 아닌 입력
    ["0", "[ERROR] 1 이상의 숫자를 입력해주세요."],   // 0 이하의 입력
    ["-5", "[ERROR] 1 이상의 숫자를 입력해주세요."],  // 음수 입력
    ["2.5", "[ERROR] 정수를 입력해주세요."]          // 정수가 아닌 입력
  ])("입력 값 '%s'에 대해 예외가 발생한다", async (input) => {
    mockQuestions([input]);

    const inputHandler = new InputHandler();

    await expect(inputHandler.readCarsName()).rejects.toThrow("[ERROR]");
  });
});

describe("자동차 전진 결정 기능 테스트", () => {
  test("랜덤 값이 4 이상일 때 전진한다", () => {
    const car = new Car("pobi");
    mockRandoms([4, 5, 6]); 

    [car.generateRandomValue(), car.generateRandomValue(), car.generateRandomValue()].forEach((randomValue) => {
      car.tryToMove(randomValue);
    });

    expect(car.moveCount).toBe(3);
  });

  test("랜덤 값이 3 이하일 때 멈춘다", () => {
    const car = new Car("pobi");
    mockRandoms([2, 3, 1]);

    [car.generateRandomValue(), car.generateRandomValue(), car.generateRandomValue()].forEach((randomValue) => {
      car.tryToMove(randomValue);
    });

    expect(car.moveCount).toBe(0);
  });
});