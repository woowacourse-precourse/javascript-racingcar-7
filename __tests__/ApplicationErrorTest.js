import { validateCarName, validateMoveCount, validateCarNamesUniqueness, validateInput } from "../src/errorHandlers/errorHandler";

describe("예외 처리 테스트", () => {
    test("자동차 이름이 6자 이상인 경우", () => {
        expect(() => validateCarName("pobi123")).toThrow("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
    });
    
    test("자동차 이름이 알파벳이 아닌 경우", () => {
        expect(() => validateCarName("pobi1")).toThrow("[ERROR] 자동차 이름은 영어 알파벳으로만 구성되어야 합니다."); // 추가된 테스트
    });

    test("자동차 이름이 중복된 경우", () => {
        const names = ["pobi", "woni", "pobi"];
        expect(() => validateCarNamesUniqueness(names)).toThrow("[ERROR] 자동차 이름은 중복될 수 없습니다.");
    });

    test("이동 횟수가 0 이하인 경우", () => {
        expect(() => validateMoveCount(0)).toThrow("[ERROR] 이동 횟수는 1 이상의 양수여야 합니다.");
    });

    test("이동 횟수가 숫자가 아닌 경우", () => {
        expect(() => validateMoveCount("abc")).toThrow("[ERROR] 이동 횟수는 숫자여야 합니다.");
    });

    test("입력이 비어 있는 경우 - 자동차 이름", () => {
        expect(() => validateInput("", "carNames")).toThrow("[ERROR] 자동차 이름을 올바르게 입력해 주세요.");
    });

    test("입력이 비어 있는 경우 - 이동 횟수", () => {
        expect(() => validateInput("", "moveCount")).toThrow("[ERROR] 이동 횟수를 입력해 주세요.");
    });
});
