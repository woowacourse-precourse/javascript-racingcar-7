import { carRun, randomRacing, raceResult } from "../src/carRun";
import { MissionUtils } from "@woowacourse/mission-utils";

describe("자동차 이동 및 출력 (carRun.js)", () => {
    let logSpy;

    beforeEach(() => {
        logSpy = jest.spyOn(console, 'log').mockImplementation(); // console.log를 mock
        MissionUtils.Random.pickNumberInRange = jest.fn(); // 랜덤 함수 mock
    });

    afterEach(() => {
        jest.restoreAllMocks(); // mock 복원
    });

    test("carRun - 자동차 이동 횟수 적용 및 출력", () => {
        MissionUtils.Random.pickNumberInRange.mockReturnValueOnce(4).mockReturnValueOnce(3).mockReturnValueOnce(2); // Mocking random values
        const carArr = ["pobi", 0, "woni", 0, "jun", 0];
        carRun(carArr, 3);

        expect(carArr[1]).toBe(1);  // pobi 이동 확인
        expect(carArr[3]).toBe(0);  // woni 이동 확인
        expect(carArr[5]).toBe(0);  // jun 이동 확인
        expect(logSpy).toHaveBeenCalled(); // Console.log 호출 확인
    });

    test("randomRacing - 랜덤 이동 처리", () => {
        MissionUtils.Random.pickNumberInRange.mockReturnValueOnce(4).mockReturnValueOnce(3).mockReturnValueOnce(5);
        const carArr = ["pobi", 1, "woni", 2, "jun", 0];
        randomRacing(carArr);
        expect(carArr[1]).toBe(2);  // pobi가 이동했는지 확인
    });

    test("raceResult - 경주 결과 출력", () => {
        const carArr = ["pobi", 3, "woni", 2, "jun", 1];
        const result = raceResult(carArr);
        expect(result).toContain("pobi : ---");
        expect(result).toContain("woni : --");
        expect(result).toContain("jun : -");
    });
});