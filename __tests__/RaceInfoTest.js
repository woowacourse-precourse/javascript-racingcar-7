import { INPUT_ERROR } from "../src/constant";
import RaceInfo from "../src/RaceInfo";

describe("경주 정보 클래스 테스트", () => {
    test("정상동작 확인 테스트", async () => {
        const rawCarNames = "치이, 하치";
        const rawRound = "3";
        const raceInfo = new RaceInfo();

        raceInfo.carNames = rawCarNames;
        raceInfo.round = rawRound;

        const result = [["치이", "하치"], 3];
        await expect([raceInfo.carNames, raceInfo.round]).toEqual(result);
    });

    test.each([
        "하치",
        "모몽가나쁜넘, 치이",
        "치이-하치",
        "치이,치이",
        "",
        ",아",
    ])("자동차 이름 에러 처리 테스트", async (value) => {
        const raceInfo = new RaceInfo();
        await expect(() => (raceInfo.carNames = value)).toThrow(INPUT_ERROR);
    });

    test.each(["3번", "일", "", "0"])(
        "이동횟수 에러 처리 테스트",
        async (value) => {
            const raceInfo = new RaceInfo();
            await expect(() => (raceInfo.round = value)).toThrow(INPUT_ERROR);
        }
    );
});
