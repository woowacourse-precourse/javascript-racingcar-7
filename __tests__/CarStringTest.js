import InputHandler from "../src/handler/InputHandler";
import ErrorMessages from "../src/constant/ErrorMessage";

describe("InputHandler", () => {
    test("split 메서드로 입력된 자동차 이름을 구분", () => {
        const inputHandler = new InputHandler();
        const input = "car1,car2,car3";
        const result = inputHandler.processTrimInput(input);
        expect(result).toEqual(["car1", "car2", "car3"]);
    });

    test("split 메서드로 입력된 자동차 이름을 구분후 좌우 공백 제거", () => {
        const inputHandler = new InputHandler();
        const input = "car1 , car2   ,car3  ";
        const result = inputHandler.processTrimInput(input);
        expect(result).toEqual(["car1", "car2", "car3"]);
    });

    test("자동차 이름이 5자 이상인 경우 오류 발생", () => {
        const inputHandler = new InputHandler();
        const input = "car12345,car2,car3";
        expect(() => inputHandler.processTrimInput(input)).toThrow(ErrorMessages.CAR_NAME_LENGTH);
    });

    test("자동차 이름이 빈 문자열일 경우 오류 발생", () => {
        const inputHandler = new InputHandler();
        const input = "car1,,car3";
        expect(() => inputHandler.processTrimInput(input)).toThrow(ErrorMessages.CAR_NAME_EMPTY);
    });

    test("자동차 이름이 중복될 경우 오류 발생", () => {
        const inputHandler = new InputHandler();
        const input = "car1,car1,car3";
        expect(() => inputHandler.processTrimInput(input)).toThrow(ErrorMessages.CAR_NAME_DUPLICATE);
    });

    test("자동차가 1개일 경우 오류 발생", () => {
        const inputHandler = new InputHandler();
        const input = "car1";
        expect(() => inputHandler.processTrimInput(input)).toThrow(ErrorMessages.MINIMUM_NUMBER_OF_CAR);
    });
});