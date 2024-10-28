import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("자동차 이름 입력 테스트", () => {
  // when 공통으로 사용할 app 객체를 생성한다.
  const app = new App();

  //TEST01
  test("빈 문자열이 들어온 경우", async () => {
    // given
    const inputs = [""];
    mockQuestions(inputs);

    // then
    await expect(app.run()).rejects.toThrow(
      "[ERROR] 빈 값은 입력할 수 없습니다. 다시 입력해주세요."
    );
  });

  //TEST02
  test("문자열에 공백이 들어온 경우", async () => {
    const inputs = ["jen ,harry"];
    mockQuestions(inputs);

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 공백은 입력할 수 없습니다. 공백을 제거하고 다시 입력해주세요."
    );
  });

  //TEST03
  test("자동차 이름이 5글자를 넘는 경우", async () => {
    const inputs = ["jenny,harryPotter"];
    mockQuestions(inputs);

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 이름은 5자 이하로 입력해주세요."
    );
  });

  //TEST04
  test("이름이 비어있는 자동차 이름이 있는 경우 (,을 연속해서 쓴 경우)", async () => {
    const inputs = ["jenny,,harry"];
    mockQuestions(inputs);

    await expect(app.run()).rejects.toThrow(
      "[ERROR] ,로 구분된 이름 중 빈 값이 있습니다. 이름을 다시 확인해주세요."
    );
  });

  //TEST05
  test("동일한 이름이 존재하는 경우", async () => {
    const inputs = ["jenny,harry,jenny"];
    mockQuestions(inputs);

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 중복된 이름은 입력할 수 없습니다. 이름을 다시 확인해주세요."
    );
  });
});
