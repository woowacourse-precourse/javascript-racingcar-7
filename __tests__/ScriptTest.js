import Script from "../src/Script";

describe("스크립트 테스트", () => {
    test("경기 내용 출력 메소드 정상작동 테스트", async () => {
        const raceResult = [
            { 치이: 1, 하치: 0 },
            { 치이: 2, 하치: 0 },
        ];
        const script = new Script(raceResult);
        const result = "치이 : -\n하치 : \n\n치이 : --\n하치 : ";
        expect(script.generateRaceSummary(raceResult)).toEqual(result);
    });

    test("우승자 출력 메소드 정상작동 테스트", async () => {
        const raceResult = [
            { 치이: 1, 하치: 0 },
            { 치이: 2, 하치: 0 },
        ];
        const script = new Script(raceResult);
        const result = "치이";
        expect(script.generateRaceWinner()).toEqual(result);
    });

    test("중복 우승자 출력 메소드 정상작동 테스트", async () => {
        const raceResult = [
            { 치이: 1, 하치: 1 },
            { 치이: 2, 하치: 2 },
        ];
        const script = new Script(raceResult);
        const result = "치이, 하치";
        expect(script.generateRaceWinner()).toEqual(result);
    });
});
