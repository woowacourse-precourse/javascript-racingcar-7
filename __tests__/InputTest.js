import { MissionUtils } from "@woowacourse/mission-utils";
import Input from "../src/view/Input.js";
import InputValidation from "../src/validation/InputValidation.js";
import { ERROR_HEADER, ERROR_BODY } from "../src/constants/errorMessage.js";
import { INPUT_PRINT_MESSAGES } from "../src/constants/printMessage.js";

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
      expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledWith(INPUT_PRINT_MESSAGES.carName);
    });

    test("5자 초과 이름 문자열을 입력으로 가지고 있는 경우,[ERROR]로 시작하는 메시지와 함께 애플리케이션을 종료한다.", async () => {
      // given
      const inputs = ["pobi,hammmm", "1"];
      mockQuestions(inputs);

      // when
      // then
      await expect(Input.getCars(InputValidation.carString))
        .rejects.toThrow(`${ERROR_HEADER} ${ERROR_BODY.carNameLength}`);
    });

    test("중복된 이름 문자열을 입력으로 가지고 있는 경우,[ERROR]로 시작하는 메시지와 함께 애플리케이션을 종료한다.", async () => {
      // given
      const inputs = ["pobi,hamm,pobi", "1"];

      mockQuestions(inputs);

      // when
      // then
      await expect(Input.getCars(InputValidation.carString))
        .rejects.toThrow(`${ERROR_HEADER} ${ERROR_BODY.carNameDuplicated}`);
    });

    test("빈 이름 문자열을 입력으로 가지고 있는 경우,[ERROR]로 시작하는 메시지와 함께 애플리케이션을 종료한다.", async () => {
      // given
      const inputs = ["pobi,hamm,", "1"];

      mockQuestions(inputs);

      // when
      // then
      await expect(Input.getCars(InputValidation.carString))
        .rejects.toThrow(`${ERROR_HEADER} ${ERROR_BODY.carNameEmpty}`);
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
      expect(MissionUtils.Console.readLineAsync)
        .toHaveBeenCalledWith(INPUT_PRINT_MESSAGES.repeatCount);
    });

    test("양수가 아닌 문자를 입력으로 가지고 있는 경우, [ERROR]로 시작하는 메시지와 함께 애플리케이션을 종료한다.", async () => {
      // given
      const inputs = ["pobi,ham", "a"];

      mockQuestions(inputs);

      // when
      // then
      await expect(Input.getRepeatCount(InputValidation.repeatCountString))
        .rejects.toThrow(`${ERROR_HEADER} ${ERROR_BODY.repeatCount}`);
    });
  });
});
