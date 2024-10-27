import { MissionUtils } from "@woowacourse/mission-utils";
import InputValidator from "../src/InputValidator";
import RacingGame from "../src/RacingGame";

describe("InputValidator", () => {
  let inputValidator;

  beforeEach(() => {
    inputValidator = new InputValidator();
  });

  describe("validateCarNames", () => {
    test("정상적인 자동차 이름 입력을 통과한다", () => {
      const carNames = ["pobi", "woni", "jun"];
      expect(() => inputValidator.validateCarNames(carNames)).not.toThrow();
    });

    test("빈 문자열 또는 공백이 있는 자동차 이름이 포함된 경우 에러를 발생시킨다", () => {
      const carNames = ["pobi", " ", "jun"];
      expect(() => inputValidator.validateCarNames(carNames)).toThrow(
        InputValidator.ERROR_EMPTY_NAME
      );
    });

    test("자동차 이름이 5자를 초과하는 경우 에러를 발생시킨다", () => {
      const carNames = ["pobi", "woniii", "jun"];
      expect(() => inputValidator.validateCarNames(carNames)).toThrow(
        InputValidator.ERROR_LONG_NAME
      );
    });

    test("중복된 자동차 이름이 포함된 경우 에러를 발생시킨다", () => {
      const carNames = ["pobi", "pobi", "jun"];
      expect(() => inputValidator.validateCarNames(carNames)).toThrow(
        InputValidator.ERROR_DUPLICATE_NAME
      );
    });
  });

  describe("validateMoveCount", () => {
    test("이동 횟수가 올바른 숫자인 경우 통과한다", () => {
      expect(() => inputValidator.validateMoveCount("3")).not.toThrow();
      expect(() => inputValidator.validateMoveCount("10")).not.toThrow();
    });

    test("이동 횟수가 유효하지 않은 경우 에러를 발생시킨다", () => {
      expect(() => inputValidator.validateMoveCount("0")).toThrow(
        InputValidator.ERROR_INVALID_MOVE_COUNT
      );
      expect(() => inputValidator.validateMoveCount("-1")).toThrow(
        InputValidator.ERROR_INVALID_MOVE_COUNT
      );
      expect(() => inputValidator.validateMoveCount("a")).toThrow(
        InputValidator.ERROR_INVALID_MOVE_COUNT
      );
    });
  });
});

describe("RacingGame", () => {
  let racingGame;

  beforeEach(() => {
    const carNames = ["pobi", "woni", "jun"];
    racingGame = new RacingGame(carNames);
    jest.spyOn(MissionUtils.Console, "print").mockImplementation(() => {});
  });

  describe("moveCar", () => {
    test("randomNumber가 4 이상일 때 자동차가 전진한다", () => {
      jest.spyOn(MissionUtils.Random, "pickNumberInRange").mockReturnValue(4);

      racingGame.moveCar(racingGame.cars[0]);
      expect(racingGame.cars[0].position).toBe("-");
    });

    test("randomNumber가 3 이하일 때 자동차가 전진하지 않는다", () => {
      jest.spyOn(MissionUtils.Random, "pickNumberInRange").mockReturnValue(3);

      racingGame.moveCar(racingGame.cars[0]);
      expect(racingGame.cars[0].position).toBe("");
    });
  });

  describe("moveAllCars", () => {
    test("모든 자동차가 전진 조건에 따라 움직인다", () => {
      jest.spyOn(MissionUtils.Random, "pickNumberInRange").mockReturnValue(5);

      racingGame.moveAllCars();
      racingGame.cars.forEach((car) => {
        expect(car.position).toBe("-");
      });
    });
  });

  describe("startRace", () => {
    test("입력된 이동 횟수만큼 경주를 진행한다", () => {
      const moveCount = 3;
      jest.spyOn(racingGame, "moveAllCars");

      racingGame.startRace(moveCount);

      expect(racingGame.moveAllCars).toHaveBeenCalledTimes(moveCount);
      expect(MissionUtils.Console.print).toHaveBeenCalledWith("\n실행결과");
    });
  });

  describe("printCurrentPositions", () => {
    test("자동차의 현재 위치를 출력한다", () => {
      racingGame.cars[0].position = "-";
      racingGame.cars[1].position = "--";
      racingGame.cars[2].position = "---";

      racingGame.printCurrentPositions();

      expect(MissionUtils.Console.print).toHaveBeenCalledWith(
        "pobi : -\nwoni : --\njun : ---"
      );
      expect(MissionUtils.Console.print).toHaveBeenCalledWith("");
    });
  });

  describe("determineWinners", () => {
    test("위치가 가장 먼 자동차가 우승자로 결정된다", () => {
      racingGame.cars[0].position = "--";
      racingGame.cars[1].position = "----";
      racingGame.cars[2].position = "---";

      const winners = racingGame.determineWinners();
      expect(winners).toEqual(["woni"]);
    });

    test("위치가 가장 먼 자동차가 여러개일 때 모두 우승자로 결정된다", () => {
      racingGame.cars[0].position = "----";
      racingGame.cars[1].position = "---";
      racingGame.cars[2].position = "----";

      const winners = racingGame.determineWinners();
      expect(winners).toEqual(["pobi", "jun"]);
    });

    test("모든 자동차의 위치가 동일할 때 모든 자동차가 우승자가 된다", () => {
      racingGame.cars[0].position = "----";
      racingGame.cars[1].position = "----";
      racingGame.cars[2].position = "----";

      const winners = racingGame.determineWinners();
      expect(winners).toEqual(["pobi", "woni", "jun"]);
    });
  });

  describe("printWinners", () => {
    test("위치가 가장 먼 자동차를 최종 우승자로 출력한다", () => {
      racingGame.cars[0].position = "----";
      racingGame.cars[1].position = "--";
      racingGame.cars[2].position = "---";

      racingGame.printWinners();

      expect(MissionUtils.Console.print).toHaveBeenCalledWith(
        "최종 우승자 : pobi"
      );
    });

    test("위치가 가장 먼 자동차가 여러개일 때 모두 최종 우승자로 출력한다", () => {
      racingGame.cars[0].position = "----";
      racingGame.cars[1].position = "----";
      racingGame.cars[2].position = "---";

      racingGame.printWinners();

      expect(MissionUtils.Console.print).toHaveBeenCalledWith(
        "최종 우승자 : pobi, woni"
      );
    });

    test("모든 자동차의 위치가 동일할 때 모든 자동차를 최종 우승자로 출력한다", () => {
      racingGame.cars[0].position = "----";
      racingGame.cars[1].position = "----";
      racingGame.cars[2].position = "----";

      racingGame.printWinners();

      expect(MissionUtils.Console.print).toHaveBeenCalledWith(
        "최종 우승자 : pobi, woni, jun"
      );
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});
