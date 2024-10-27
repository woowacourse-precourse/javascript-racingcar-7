import { Random } from "@woowacourse/mission-utils";
import Race from "../src/Race";

describe("Race class 테스트", () => {

    test("세 라운드 정상동작 확인 테스트", async () => {
        const race = new Race(["치이", "하치"], 3);

        const randomNumbers = [1, 2, 4, 2, 6, 9];

        randomNumbers.map((number) =>
            jest.spyOn(Random, "pickNumberInRange").mockReturnValueOnce(number)
        );

        const result = [
            { 치이: 0, 하치: 0 },
            { 치이: 1, 하치: 0 },
            { 치이: 2, 하치: 1 },
        ];
        await expect(race.result()).toEqual(result);
    });
});
