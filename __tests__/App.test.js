import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 경주 게임", () => {
  test("올바른 자동차 이름을 입력하면 정상적으로 초기화", async () => {
    const inputs = ["car1,car2", "3"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();

    const app = new App();
    await app.run();

    // 입력된 자동차 이름에 따라 출력이 발생했는지 확인
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("실행 결과"));
  });

  test("자동차 이름이 1자 이상 5자 이하가 아닌 경우 에러 발생", async () => {
    const inputs = ["car12345,supercar", "2"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 자동차 이름은 1자 이상 5자 이하만 가능합니다."
    );
  });

  test("자동차 이름에 영어와 한글 이외의 문자가 포함된 경우 에러 발생", async () => {
    const inputs = ["car1,#car", "1"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 자동차 이름은 영어 혹은 한글만 가능하며, 자동차간 구분자는 ,(컴마)로만 가능합니다."
    );
  });

  test("올바르지 않은 시도 횟수 입력 시 에러 발생", async () => {
    const inputs = ["car1,car2", "abc"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 시도할 회수는 숫자만 입력할 수 있습니다."
    );
  });

  test("정상적인 입력 시 게임 진행 및 우승자 출력", async () => {
    const inputs = ["car1,car2", "3"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();

    const app = new App();
    await app.run();

    // 시도 횟수만큼 출력이 발생했는지 확인
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("실행 결과"));
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("최종 우승자 :")
    );
  });
});
