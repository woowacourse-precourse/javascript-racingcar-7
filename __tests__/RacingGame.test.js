import Car from "../src/racing/Car.js";
import RacingGame from "../src/Racing/RacingGame.js";
import View from "../src/View/View.js";

jest.mock("../src/view/View.js");

describe("RacingGame", () => {
  let racingGame;

  beforeEach(() => {
    racingGame = new RacingGame();
    racingGame.carNames = ["pobi", "woni", "jun"];
    racingGame.cars = racingGame.carNames.map((name) => new Car(name));
    racingGame.repeatTime = 3;
  });

  test("각 차수별로 자동차 이동 결과 출력", () => {
    const spy = jest.spyOn(View, "print");
    racingGame.displayCurrentDistances();
    expect(spy).toHaveBeenCalledTimes(racingGame.cars.length + 1);
  });

  test("최종 우승자 출력 - 단독 우승", () => {
    racingGame.cars[0].move();
    racingGame.cars[0].move();
    racingGame.cars[1].move();

    const spy = jest.spyOn(View, "print");
    racingGame.getWinners();
    expect(spy).toHaveBeenCalledWith("최종 우승자 : pobi");
  });

  test("최종 우승자 출력 - 공동 우승", () => {
    racingGame.cars[0].move();
    racingGame.cars[1].move();
    racingGame.cars[2].move();

    const spy = jest.spyOn(View, "print");
    racingGame.getWinners();
    expect(spy).toHaveBeenCalledWith("최종 우승자 : pobi, woni, jun");
  });
});
