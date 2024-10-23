import InputHandler from "../src/handler/InputHandler";

describe("InputHandler", () => {
    test("split 메서드로 입력된 자동차 이름을 구분", () => {
        const inputHandler = new InputHandler();
        const input = "car1,car2,car3";
        const result = inputHandler.processInput(input);
        expect(result).toEqual(["car1", "car2", "car3"]);
    });

    test("split 메서드로 입력된 자동차 이름을 구분후 좌우 공백 제거", () => {
        const inputHandler = new InputHandler();
        const input = "car1 , car2   ,car3  ";
        const result = inputHandler.processInput(input);
        expect(result).toEqual(["car1", "car2", "car3"]);
    });

    test("자동차 이름이 5자 이상인 경우 오류 발생", () => {
        const inputHandler = new InputHandler();
        const input = "car12345,car2,car3";
        expect(() => inputHandler.processInput(input)).toThrow("[ERROR] 자동차 이름은 5자 이하여야 합니다.");
    });

    test("자동차 이름이 빈 문자열일 경우 오류 발생", () => {
        const inputHandler = new InputHandler();
        const input = "car1,,car3";
        expect(() => inputHandler.processInput(input)).toThrow("[ERROR] 자동차 이름은 빈 문자열일 수 없습니다.");
    });
});