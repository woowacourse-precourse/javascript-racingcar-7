import { determineWinners } from "../src/utils/determineWinners.js";

describe("determineWinners 함수 테스트 : ", () => {
  test("우승자가 한 명일 경우 해당 우승자를 배열로 반환한다", () => {
    const cars = [
      { getName: () => "pobi", getCount: () => 3 },
      { getName: () => "woni", getCount: () => 2 },
      { getName: () => "dev", getCount: () => 4 },
    ];

    const result = determineWinners(cars);

    expect(result).toEqual(["dev"]);
  });

  test("우승자가 여러 명일 경우 해당 우승자들을 배열로 반환한다", () => {
    const cars = [
      { getName: () => "pobi", getCount: () => 4 },
      { getName: () => "woni", getCount: () => 2 },
      { getName: () => "dev", getCount: () => 4 },
    ];

    const result = determineWinners(cars);

    expect(result).toEqual(["pobi", "dev"]);
  });

  test("모든 참가자의 이동 횟수가 동일할 경우 모든 참가자를 배열로 반환한다", () => {
    const cars = [
      { getName: () => "pobi", getCount: () => 3 },
      { getName: () => "woni", getCount: () => 3 },
      { getName: () => "dev", getCount: () => 3 },
    ];

    const result = determineWinners(cars);

    expect(result).toEqual(["pobi", "woni", "dev"]);
  });

  test("참가자가 한 명일 경우 해당 참가자를 우승자로 반환한다", () => {
    const cars = [{ getName: () => "pobi", getCount: () => 5 }];

    const result = determineWinners(cars);

    expect(result).toEqual(["pobi"]);
  });
});
