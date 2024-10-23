import InputHandler from "../src/handler/InputHandler";

describe("InputHandler", () => {
    test("입력한 횟수 그대로 출력", () => {
        const inputHandler = new InputHandler();
        const input = 1;
        const result = inputHandler.countNumInput(input);
        expect(result).toBe(1)
    });
});