import { MissionUtils } from "@woowacourse/mission-utils";
import Input from "../src/view/Input.js";
import InputValidation from "../src/validation/InputValidation.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("입력", () => {
  describe("자동차 이름을 입력받는다.", () => {
    test("입력 스크립트를 출력한다.", async () => {
      // given
      const inputs = ["pobi,ham", "1"];
      mockQuestions(inputs);

      // when
      await Input.getCars(InputValidation.carString);

      // then
      expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledWith("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    });

    test("어플리케이션이 생성되었고 5자 초과 이름 문자열을 입력으로 가지고 있는 경우, 입력을 받으면, [ERROR]로 시작하는 메시지와 함께 애플리케이션을 종료한다.", async () => {
      // given
      const inputs = ["pobi,hammmm", "1"];
      mockQuestions(inputs);

      // when
      // then
      await expect(Input.getCars(InputValidation.carString)).rejects.toThrow("[ERROR]");
    });

    test("어플리케이션이 생성되었고 중복된 이름 문자열을 입력으로 가지고 있는 경우, 입력을 받으면, [ERROR]로 시작하는 메시지와 함께 애플리케이션을 종료한다.", async () => {
      // given
      const inputs = ["pobi,hamm,pobi", "1"];

      mockQuestions(inputs);

      // when
      // then
      await expect(Input.getCars(InputValidation.carString)).rejects.toThrow("[ERROR]");
    });

    test("어플리케이션이 생성되었고 빈 이름 문자열을 입력으로 가지고 있는 경우, 입력을 받으면, [ERROR]로 시작하는 메시지와 함께 애플리케이션을 종료한다.", async () => {
      // given
      const inputs = ["pobi,hamm,", "1"];

      mockQuestions(inputs);

      // when
      // then
      await expect(Input.getCars(InputValidation.carString)).rejects.toThrow("[ERROR]");
    });
  });

  describe("시도할 횟수를 입력받는다.", () => {
    test("입력 스크립트를 출력한다.", async () => {
      // given
      const inputs = ["1"];
      mockQuestions(inputs);

      // when
      await Input.getRepeatCount(InputValidation.repeatCountString);

      // then
      expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledWith("시도할 횟수는 몇 회인가요?\n");
    });

    test("어플리케이션이 생성되었고 양수가 아닌 문자를 입력으로 가지고 있는 경우, 어플리케이션이 실행되고 실행 횟수 입력을 받으면, [ERROR]로 시작하는 메시지와 함께 애플리케이션을 종료한다.", async () => {
      // given
      const inputs = ["pobi,ham", "a"];

      mockQuestions(inputs);

      // when
      // then
      await expect(Input.getRepeatCount(InputValidation.repeatCountString)).rejects.toThrow("[ERROR]");
    });
  });
});
