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
        "[ERROR] 자동차 이름에 빈 값을 입력할 수 없습니다."
      );
    });

    test("자동차 이름이 5자를 초과하는 경우 에러를 발생시킨다", () => {
      const carNames = ["pobi", "woniii", "jun"];
      expect(() => inputValidator.validateCarNames(carNames)).toThrow(
        "[ERROR] 자동차 이름은 5자 이하만 가능합니다."
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
        "[ERROR] 이동 횟수는 1 이상의 숫자여야 합니다."
      );
      expect(() => inputValidator.validateMoveCount("-1")).toThrow(
        "[ERROR] 이동 횟수는 1 이상의 숫자여야 합니다."
      );
      expect(() => inputValidator.validateMoveCount("a")).toThrow(
        "[ERROR] 이동 횟수는 1 이상의 숫자여야 합니다."
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

  afterEach(() => {
    jest.restoreAllMocks();
  });
});
