import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();

    MissionUtils.Console.readLineAsync.mockImplementation(() => {
        const input = inputs.shift();
        return Promise.resolve(input);
    });
};


describe("자동차 경주 예외 테스트", () => {
    test("자동차 이름이 5자 이하가 아닌 경우", async () => {
        const inputs = ["pobi,javaji"];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("구분자가 쉼표가 아닌 경우", async () => {
        const inputs = ["pobi.java.ji"];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("경주할 자동차가 1대인 경우", async () => {
        const inputs = ["pobi"];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("시도 횟수가 0인 경우", async () => {
        const inputs = ["pobi,woni", 0];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test.each([
        ["pobi,woni", "a"],
        ["pobi,woni", "1번"],
        ["pobi,woni", ""],
    ])("사용자 입력이 숫자가 아닌 경우", async (carsInput, tryInput) => {
        const inputs = [carsInput, tryInput];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("시도 횟수가 음수인 경우", async () => {
        const inputs = ["pobi,woni", -1];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow("[ERROR]");
    });
});