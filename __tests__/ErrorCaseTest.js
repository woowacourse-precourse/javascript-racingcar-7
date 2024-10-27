import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import InputValidator from "../src/InputValidator.js";

const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();
    MissionUtils.Console.readLineAsync.mockImplementation(() => {
        const input = inputs.shift();
        return Promise.resolve(input);
    });
};

describe("에러 발생 케이스", () => {
    test.each([
        {
            description: "자동차 이름이 미입력된 경우",
            inputs: [""],
            error: InputValidator.ERROR_MESSAGES.CAR_NAME_EMPTY,
        },
        {
            description: "자동차 이름 사이에 공백이 존재하는 경우",
            inputs: ["pobi, woni", "1"],
            error: InputValidator.ERROR_MESSAGES.INVALID_NAME,
        },
        {
            description: "자동차 이름에 특수 문자가 포함된 경우",
            inputs: ["pobi,woni!", "1"],
            error: InputValidator.ERROR_MESSAGES.INVALID_NAME,
        },
        {
            description: "자동차 이름이 5자를 초과한 경우",
            inputs: ["pobi,woniwoni", "1"],
            error: InputValidator.ERROR_MESSAGES.INVALID_NAME,
        },
        {
            description: "중복된 자동차 이름이 존재하는 경우",
            inputs: ["pobi,pobi", "1"],
            error: InputValidator.ERROR_MESSAGES.DUPLICATED_NAME,
        },
        {
            description: "쉼표로 시작하는 경우",
            inputs: [",pobi,woni", "1"],
            error: InputValidator.ERROR_MESSAGES.INVALID_NAME,
        },
        {
            description: "쉼표로 끝나는 경우",
            inputs: ["pobi,woni,", "1"],
            error: InputValidator.ERROR_MESSAGES.INVALID_NAME,
        },
        {
            description: "쉼표가 연속으로 입력된 경우",
            inputs: ["pobi,,woni", "1"],
            error: InputValidator.ERROR_MESSAGES.INVALID_NAME,
        },
        {
            description: "시도 횟수가 미입력된 경우",
            inputs: ["pobi,woni", ""],
            error: InputValidator.ERROR_MESSAGES.TRY_COUNT_EMPTY,
        },
        {
            description: "시도 횟수가 0인 경우",
            inputs: ["pobi,woni", "0"],
            error: InputValidator.ERROR_MESSAGES.INVALID_TRY_COUNT,
        },
        {
            description: "시도 횟수가 음수인 경우",
            inputs: ["pobi,woni", "-1"],
            error: InputValidator.ERROR_MESSAGES.INVALID_TRY_COUNT,
        },
        {
            description: "시도 횟수가 문자인 경우",
            inputs: ["pobi,woni", "a"],
            error: InputValidator.ERROR_MESSAGES.INVALID_TRY_COUNT,
        },
    ])("$description", async ({ inputs, error }) => {
        // given
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow(`[ERROR] ${error}`);
    });
});
