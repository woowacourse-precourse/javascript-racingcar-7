import { App } from ".";

test("자동차 이름은 5자를 넘으면 안된다.", () => {
  expect(App("sunkite,pobi", "1")).toBe(
    "[ERROR] 이름은 5자 이하만 가능합니다."
  );
});
