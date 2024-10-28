import App from "../src/App.js";
import {MissionUtils} from "@woowacourse/mission-utils";
import {OUTPUT_MESSAGE} from "../src/constants/message.js";

const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();
    MissionUtils.Console.readLineAsync.mockImplementation(() => {
        const input = inputs.shift();
        return Promise.resolve(input);
    });
};

const emptyNameTest = async (input) => {
    mockQuestions(input);
    const app = new App();
    await expect(app.run()).rejects.toThrow(
        OUTPUT_MESSAGE.ERROR.FIRST_PROMPT.HAS_EMPTY
    );
};

describe("자동차 이름 관련 테스트", () => {
    test("5자 이상 입력", async () => {
        mockQuestions(["fiveupper,four"]);
        const app = new App();
        await expect(app.run()).rejects.toThrow(
            OUTPUT_MESSAGE.ERROR.FIRST_PROMPT.IS_MAX
        );
    });

    test("자동차 중복", async () => {
        mockQuestions(["pobi,woni,woni"]);
        const app = new App();
        await expect(app.run()).rejects.toThrow(
            OUTPUT_MESSAGE.ERROR.FIRST_PROMPT.IS_DUPLICATION
        );
    });

    test("빈 값 입력", async () => {
        mockQuestions([""]);
        const app = new App();
        await expect(app.run()).rejects.toThrow(
            OUTPUT_MESSAGE.ERROR.FIRST_PROMPT.HAS_EMPTY
        );
    });

    test("자동차 빈 이름 포함1 [q,]", async () => {
        await emptyNameTest(["q,"]);
    });

    test("자동차 빈 이름 포함2 [q,,]", async () => {
        await emptyNameTest(["q,,"]);
    });

    test("자동차 빈 이름 포함3 [,w]", async () => {
        await emptyNameTest([",w"]);
    });

    test("자동차 빈 이름 포함4 [e,,r]", async () => {
        await emptyNameTest(["e,,,r"]);
    });
});