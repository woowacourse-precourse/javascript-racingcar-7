import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();

    MissionUtils.Console.readLineAsync.mockImplementation(() => {
        const input = inputs.shift();
        return Promise.resolve(input);
    });
};

describe("예외 테스트", () => {
    test("숫자 외 문자로 시도할 횟수를 입력했을 때", async () => {
        // given
        const inputs = ["pobi,java", "2번"];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("시도할 횟수가 0회 미만일 때", async () => {
        // given
        const inputs = ["pobi,java", "-1"];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("시도할 횟수가 입력되지 않았거나 공백일 때", async () => {
        // given
        const inputs = ["pobi,java", ""];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow("[ERROR]");
    });
});
