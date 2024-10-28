import { createCarArr } from "../src/createCarArr"

describe("자동차 이름 배열 변환 (createCarArr.js)", () => {
    test("createCarArr - 문자열을 배열로 변환", () => {
        const carArr = createCarArr("pobi,woni,jun")
        expect(carArr).toEqual(["pobi", 0, "woni", 0, "jun", 0])
    });
});