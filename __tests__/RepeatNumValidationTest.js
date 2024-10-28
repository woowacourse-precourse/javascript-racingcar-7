import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("반복 횟수 입력 테스트", () => {
  // when 공통으로 사용할 app 객체를 생성한다.
  const app = new App();

  //TEST01
  test("빈 입력값이 들어온 경우", async () => {
    // given
    const inputs = ["harry,jane", ""];
    mockQuestions(inputs);

    // then
    await expect(app.run()).rejects.toThrow(
      "[ERROR] 빈 값은 입력할 수 없습니다. 다시 입력해주세요."
    );
  });

  //TEST02
  test("문자열에 공백이 들어온 경우", async () => {
    const inputs = ["harry,jane", " "];
    mockQuestions(inputs);

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 공백은 입력할 수 없습니다. 공백을 제거하고 다시 입력해주세요."
    );
  });

  //TEST03
  test("입력값이 숫자가 아닌 경우", async () => {
    const inputs = ["harry,jane", "3d"];
    mockQuestions(inputs);

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 입력값이 숫자가 아닙니다. 양의 정수만 입력해주세요."
    );
  });

  //TEST04
  test("입력값이 정수가 아닌 경우", async () => {
    const inputs = ["harry,jane", 3.4];
    mockQuestions(inputs);

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 입력값이 정수가 아닙니다. 양의 정수만 입력해주세요."
    );
  });

  //TEST05
  test("입력값이 음수인 경우", async () => {
    const inputs = ["harry,jane", -2];
    mockQuestions(inputs);

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 음수는 입력할 수 없습니다. 양의 정수만 입력해주세요."
    );
  });

  //TEST06
  test("입력값이 0인 경우", async () => {
    const inputs = ["harry,jane", 0];
    mockQuestions(inputs);

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 0은 입력할 수 없습니다. 1 이상의 정수만 입력해주세요."
    );
  });
});
