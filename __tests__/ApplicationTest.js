// import App from "../src/App.js";
import Car from "../src/Car.js";
import RacingGame from "../src/RacingGame.js";
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

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

//   모든 기능 구현 후 테스트 예정
// describe("자동차 경주", () => {
//   test("기능 테스트", async () => {
//     // given
//     const MOVING_FORWARD = 4;
//     const STOP = 3;
//     const inputs = ["pobi,woni", "1"];
//     const logs = ["pobi : -", "woni : ", "최종 우승자 : pobi"];
//     const logSpy = getLogSpy();

//     mockQuestions(inputs);
//     mockRandoms([MOVING_FORWARD, STOP]);

//     // when
//     const app = new App();
//     await app.run();

//     // then
//     logs.forEach((log) => {
//       expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
//     });
//   });

//   test("예외 테스트", async () => {
//     // given
//     const inputs = ["pobi,javaji"];
//     mockQuestions(inputs);

//     // when
//     const app = new App();

//     // then
//     await expect(app.run()).rejects.toThrow("[ERROR]");
//   });
// });

describe("Car 클래스 테스트", () => {
  test("유효한 이름으로 자동차 생성", () => {
    const car = new Car("pobi");
    expect(car.name).toBe("pobi");
  });

  test("이름이 5자를 초과하면 에러 발생", () => {
    expect(() => new Car("javajigi")).toThrow("[ERROR]");
  });

  test("이름이 공백이면 에러 발생", () => {
    expect(() => new Car("")).toThrow("[ERROR]");
  });

  test("이름이 공백 문자로만 이루어진 경우 에러 발생", () => {
    expect(() => new Car("  ")).toThrow("[ERROR]");
  });

  test("4 이상의 숫자에서 자동차 전진", () => {
    const car = new Car("pobi");
    car.moveCar(4);
    expect(car.position).toBe(1);
  });

  test("3 이하의 숫자에서 자동차 정지", () => {
    const car = new Car("pobi");
    car.moveCar(3);
    expect(car.position).toBe(0);
  });

  test("현재 상태 출력 테스트", () => {
    const car = new Car("pobi");
    car.moveCar(4);
    car.moveCar(7);
    expect(car.getCurrentStatus()).toBe("pobi : --");
  });
});

describe("RacingGame 클래스 테스트", () => {
  test("쉼표로 구분된 이름으로 자동차들 생성", () => {
    const game = new RacingGame();
    expect(() => {
      game.createCars("pobi, jini");
    }).not.toThrow("[ERROR]");
  });

  test("중복된 이름의 자동차들 생성 시 에러 발생", () => {
    const game = new RacingGame();
    expect(game.validateTryCount("5")).toBe(5);
  });

  test("유효한 시도 횟수 입력", () => {
    const game = new RacingGame();
    expect(() => {
      game.validateTryCount("-1");
    }).toThrow("[ERROR]");
  });

  test("시도 횟수가 0이하일 경우 에러 발생", () => {
    const game = new RacingGame();
    expect(() => {
      game.validateTryCount("-1");
    }).toThrow("[ERROR]");
  });

  test("시도 횟수가 숫자가 아닐 경우 에러 발생", () => {
    const game = new RacingGame();
    expect(() => {
      game.validateTryCount("lolol");
    }).toThrow("[ERROR]");
  });

  test("모든 자동차 이동 테스트", () => {
    const game = new RacingGame();
    game.createCars("pobi, jini");

    mockRandoms([6, 3]);

    game.moveAllCars();

    expect(game.cars[0].position).toBe(1);
    expect(game.cars[1].position).toBe(0);
  });

  test("모든 자동차 상태 출력 테스트", () => {
    const game = new RacingGame();
    const logSpy = getLogSpy();

    game.createCars("pobi, jini");

    mockRandoms([6, 3]);

    game.moveAllCars();
    game.printAllStatus();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("pobi : -"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("jini : "));
  });

  test("단독 우승자 테스트", () => {
    const game = new RacingGame();
    game.createCars("pobi, jini, cho");

    mockRandoms([6, 3, 1, 6, 3, 1]);

    game.moveAllCars();

    const winner = game.findWinners();
    expect(winner).toEqual(["pobi"]);
  });

  test("공동 우승자 테스트", () => {
    const game = new RacingGame();
    game.createCars("pobi, jini, cho");

    mockRandoms([4, 4, 3, 4, 4, 2]);

    game.moveAllCars();

    const winners = game.findWinners();
    expect(winners).toEqual(["pobi", "jini"]);
  });

  test("최종 우승자 출력 테스트", () => {
    const game = new RacingGame();
    const logSpy = getLogSpy();

    game.createCars("pobi, jini, cho");

    mockRandoms([4, 4, 3, 4, 4, 2]);

    game.moveAllCars();
    game.printWinners();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("최종 우승자 : pobi, jini")
    );
  });
});
