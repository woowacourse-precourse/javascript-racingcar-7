import App from "../src/App";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockConsoleInput = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockResolvedValue(input);
};

describe("자동차 이름 입력 기능", () => {
  test("쉼표로 구분된 자동차 이름을 배열로 반환", async () => {
    mockConsoleInput("pobi,woni,jun");

    const app = new App();
    const carNames = await app.getCarNames();

    expect(carNames).toEqual(["pobi", "woni", "jun"]);
  });

  test("자동차 이름의 양 옆 공백 제거", async () => {
    mockConsoleInput(" pobi ,  woni,  jun  ");

    const app = new App();
    const carNames = await app.getCarNames();

    expect(carNames).toEqual(["pobi", "woni", "jun"]);
  });

  test("자동차 이름이 공백일 경우 에러 발생", async () => {
    mockConsoleInput("pobi, ,jun");

    const app = new App();

    await expect(app.getCarNames()).rejects.toThrow(
      "[ERROR] 자동차 이름은 공백일 수 없습니다."
    );
  });
});

describe("자동차 이름 유효성 검사 기능", () => {
  test("자동차 이름의 길이가 5자 이하인지 검사", async () => {
    mockConsoleInput("pobi,jun,woowacourse");

    const app = new App();

    await expect(app.getCarNames()).rejects.toThrow(
      "[ERROR] 자동차 이름은 1자 이상 5자 이하로 입력해야 합니다."
    );
  });

  test("자동차 이름이 중복되지 않았는지 검사", async () => {
    mockConsoleInput("pobi,pobi,jun");

    const app = new App();

    await expect(app.getCarNames()).rejects.toThrow(
      "[ERROR] 자동차 이름은 중복될 수 없습니다."
    );
  });
});
