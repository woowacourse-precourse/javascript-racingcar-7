import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";

const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();

    MissionUtils.Console.readLineAsync.mockImplementation(() => {
        const input = inputs.shift();
        return Promise.resolve(input);
    });
};

describe("자동차 경주 예외 처리 테스트", () => {
    test("자동차 이름이 5자를 초과하는 경우", async () => {
        const inputs = ["pobi,javaji"];
        mockQuestions(inputs);

        const app = new App();
        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("자동차 이름이 빈 문자열인 경우", async () => {
        const inputs = ["pobi,,woni"];
        mockQuestions(inputs);

        const app = new App();
        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("시도 횟수가 숫자가 아닌 경우", async () => {
        const inputs = ["pobi,woni", "test"];
        mockQuestions(inputs);

        const app = new App();
        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("시도 횟수가 음수나 0인 경우", async () => {
        const inputs = ["pobi,woni", "-1"];
        mockQuestions(inputs);

        const app = new App();
        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("입력값이 없이 엔터를 누른 경우", async () => {
        const inputs = [""];
        mockQuestions(inputs);

        const app = new App();
        await expect(app.run()).rejects.toThrow("[ERROR]");
    });
});
