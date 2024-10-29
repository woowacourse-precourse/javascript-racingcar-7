import {  setRoundData, playRoundGame, getWinner } from "../src/racingGame/features/features.js";
import { MissionUtils } from "@woowacourse/mission-utils";

describe("setRoundData", () => {
  test("Round Data 형식 테스트", () => {
    const userList = ["Song", "Jung", "Hoo"];
    const expectedRoundData = [
      { name: "Song", distance: 0 },
      { name: "Jung", distance: 0 },
      { name: "Hoo", distance: 0 },
    ];

    const result = setRoundData(userList);
    expect(result).toEqual(expectedRoundData);
  });
});

describe("playRoundGame", () => {
  test("4 이상일 때 전진하는 지 테스트", () => {
    const roundData = [
      { name: "Jung", distance: 0 },
      { name: "Hoo", distance: 0 },
    ];

    jest.spyOn(MissionUtils.Random, "pickNumberInRange").mockReturnValue(4);

    const result = playRoundGame(roundData);
    expect(result).toEqual([
      { name: "Jung", distance: 1 },
      { name: "Hoo", distance: 1 },
    ]);
  });

  test("3이하일 때 멈추는 지 테스트", () => {
    const roundData = [
      { name: "Jung", distance: 0 },
      { name: "Hoo", distance: 0 },
    ];

    jest.spyOn(MissionUtils.Random, "pickNumberInRange").mockReturnValue(3);

    const result = playRoundGame(roundData);
    expect(result).toEqual([
      { name: "Jung", distance: 0 },
      { name: "Hoo", distance: 0 },
    ]);
  });
});

describe("getWinner", () => {
  test("단독 우승자 테스트", () => {
    const roundData = [
      { name: "Song", distance: 2 },
      { name: "Jung", distance: 3 },
      { name: "Hoo", distance: 1 },
    ];

    const result = getWinner(roundData);
    expect(result).toEqual(["Jung"]);
  });

  test("공동 우승자 테스트", () => {
    const roundData = [
      { name: "Song", distance: 3 },
      { name: "Jung", distance: 3 },
      { name: "Hoo", distance: 1 },
    ];

    const result = getWinner(roundData);
    expect(result).toEqual(["Song", "Jung"]);
  });
});
