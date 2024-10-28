import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const testEmptyNames = async (input) => {
  mockQuestions(input);
  const app = new App();
  await expect(app.run()).rejects.toThrow(
    "[ERROR] 자동차 이름은 빈 문자열이 포함될 수 없습니다."
  );
};

describe("자동차 이름 관련 테스트", () => {
  test("잘못된 자동차 이름 - 5자 이상 입력", async () => {
    mockQuestions(["fiveupper, four"]);
    const app = new App();
    await expect(app.run()).rejects.toThrow(
      "[ERROR] 자동차 이름은 5자 이하만 가능합니다."
    );
  });

  test("중복된 자동차 이름", async () => {
    mockQuestions(["pobi, woni, woni"]);
    const app = new App();
    await expect(app.run()).rejects.toThrow(
      "[ERROR] 서로 다른 이름으로 자동차의 이름들을 지정하세요."
    );
  });

  test("자동차 이름 입력 안함", async () => {
    mockQuestions([""]);
    const app = new App();
    await expect(app.run()).rejects.toThrow(
      "[ERROR] 경주할 자동차 이름을 입력하세요."
    );
  });

  // 빈 이름 테스트를 함수로 분리
  test("자동차 이름에 빈 이름이 포함된 경우 - [pobi,]", async () => {
    await testEmptyNames(["pobi,"]);
  });

  test("자동차 이름에 빈 이름이 포함된 경우 - [pobi,,]", async () => {
    await testEmptyNames(["pobi,,"]);
  });

  test("자동차 이름에 빈 이름이 포함된 경우 - [,pobi]", async () => {
    await testEmptyNames([",pobi"]);
  });

  test("자동차 이름에 빈 이름이 포함된 경우 - [pobi,,woni]", async () => {
    await testEmptyNames(["pobi,,woni"]);
  });
});
