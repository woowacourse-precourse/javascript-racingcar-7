import { getWinner, getWinnerArr, getTopRate } from "../src/getWinner"

describe("우승자 판별 (getWinner.js)", () => {
    test("getTopRate - 최고 이동 거리 계산", () => {
        const carArr = ["pobi", 4, "woni", 5, "jun", 3];
        const topRate = getTopRate(carArr);
        expect(topRate).toBe(5);
    });

    test("getWinnerArr - 최고 거리 우승자 배열 반환", () => {
        const carArr = ["pobi", 4, "woni", 5, "jun", 5];
        const winners = getWinnerArr(carArr);
        expect(winners).toEqual(["woni", "jun"]);
    });

    test("getWinner - 최종 우승자 출력", () => {
        const carArr = ["pobi", 4, "woni", 5, "jun", 5];
        const result = getWinner(carArr);
        expect(result).toBe("최종 우승자 : woni, jun");
    });
});