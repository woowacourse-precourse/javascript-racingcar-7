import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "../src/domains/car.js";
import CarRace from "../src/domains/carRace.js";
import CAR_RACE from "../src/constants/carRace.js";
import CAR from "../src/constants/car.js";
import { DEFAULT_ERROR, ERROR_MESSAGES } from "../src/constants/messages.js";

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

describe("자동차 기능 테스트", () => {
  test("자동차는 전진할 수 있다.", () => {
    const car = new Car("Hellol77");

    car.move();
    car.move();

    expect(car.position).toEqual(2);
  });
});

describe("자동차 경주 테스트", () => {
  let singleCar;
  let singleCarRace;

  beforeEach(() => {
    singleCar = new Car("a");
    singleCarRace = new CarRace([singleCar]);
  });

  test("우승자는 한 명 이상일 수 있다.", () => {
    const carNames = ["a", "b", "c"];
    const carInstance = carNames.map((carName) => new Car(carName));
    carInstance.map((car) => car.move());
    const carRace = new CarRace(carInstance);

    const winner = carRace.getWinner();

    expect(winner.length).toEqual(3);
  });

  test(`랜덤 값이  ${CAR_RACE.MOVE_THRESHOLD} 미만일 때는 전진하지 않는다.`, () => {
    const randomNumber = CAR_RACE.MOVE_THRESHOLD - 1;

    singleCarRace.moveCar("a", randomNumber);

    expect(singleCar.position).toEqual(0);
  });

  test(`랜덤 값이 ${CAR_RACE.MOVE_THRESHOLD} 이상일 때 전진한다.`, () => {
    const randomNumber = CAR_RACE.MOVE_THRESHOLD;

    singleCarRace.moveCar("a", randomNumber);

    expect(singleCar.position).toEqual(1);
  });

  test("사용자가 입력한 시도 횟수만큼 라운드가 진행된다.", () => {
    const inputTryCount = 8;

    singleCarRace.totalUnitRound(8);

    expect(singleCarRace.result.length).toEqual(inputTryCount);
  });
});

describe("입력 값 테스트", () => {
  test(`자동차 이름은 ${CAR.NAME_MAX_LENGTH}자 이하만 입력 가능하다.`, async () => {
    const inputs = ["a".repeat(CAR.NAME_MAX_LENGTH + 1)];

    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.CAR_NAME_LENGTH);
  });

  test(`자동차 이름은 ${CAR.NAME_MIN_LENGTH}자 이상만 입력 가능하다.`, async () => {
    const inputs = [" "];

    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.CAR_NAME_LENGTH);
  });

  test("중복된 자동차 이름이 존재하면 안된다.", async () => {
    const inputs = ["a,a"];

    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.SAME_CAR_NAME);
  });

  test(`시도 횟수가 ${CAR_RACE.MIN_ROUND_COUNT}미만이면 에러 메시지를 띄운다.`, async () => {
    const inputs = ["a,b", "0"];

    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.TRY_COUNT_MIN);
  });
});
