import { Random } from "@woowacourse/mission-utils";
import Race from "../src/Race";

describe("Race class 테스트", () => {
    test("정상동작 확인 테스트", async () => {
        const race = new Race(["치이", "하치"], 1);

        jest.spyOn(Random, "pickNumberInRange").mockReturnValue(4);

        const result = [{ 치이: 1, 하치: 1 }];
        await expect(race.result()).toEqual(result);
    });
});
