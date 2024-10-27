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
