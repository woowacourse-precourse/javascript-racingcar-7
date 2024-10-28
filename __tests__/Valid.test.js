import { nameStrValid, runTimesValid } from "../src/Valid";

describe("유효성 검사 기능 테스트 (Valid.js)", () => {
    test("nameStrValid - 유효성 검사: 이름 입력 오류", () => {
        expect(() => nameStrValid("")).toThrow("[ERROR] 경주할 자동차 이름을 입력해주세요.");
        expect(() => nameStrValid("pobi woni jun")).toThrow("[ERROR] 쉼표를 사용해주세요.");
        expect(() => nameStrValid("pobi.woni.jun")).toThrow("[ERROR] 쉼표를 사용해주세요.");
        expect(() => nameStrValid("pobi,,woni")).toThrow("[ERROR] 쉼표를 한 번만 사용해주세요.");
    });

    test("runTimesValid - 유효성 검사: 횟수 입력 오류", () => {
        expect(() => runTimesValid("")).toThrow("[ERROR] 횟수를 입력해주세요");
        expect(() => runTimesValid("a")).toThrow("[ERROR] 숫자를 입력해주세요");
    });
});