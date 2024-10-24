import { setUserList, setRoundNum } from "../src/gameSetting/gameSetting";

describe("setUserList", () => {
  test.each([[""], [",,"]])("사용자 목록이 없을 때", async (input) => {
    await expect(async () => await setUserList(input)).rejects.toThrow(
      "[ERROR]"
    );
  });

  test.each([["후,후"], ["정, 후,후"]])(
    "사용자가 중복되었을 때",
    async (input) => {
      await expect(async () => await setUserList(input)).rejects.toThrow(
        "[ERROR]"
      );
    }
  );
});

describe("setRoundNum", () => {
  test.each([[""], ["a"]])("라운드 숫자가 잘못된 형식일 때", async (input) => {
    await expect(async () => await setRoundNum(input)).rejects.toThrow(
      "[ERROR]"
    );
  });

  test.each([[-1], [0.2]])("라운드 숫자가 자연수가 아닐 때", async (input) => {
    await expect(async () => await setRoundNum(input)).rejects.toThrow(
      "[ERROR]"
    );
  });
});
