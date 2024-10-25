import View from "../src/View/View";

test("View Result Test", () => {
  const view = new View();
  const consoleSpy = jest.spyOn(console, "log");

  view.outputResult([
    { name: "pobi", distance: 3 },
    { name: "rupi", distance: 10 },
  ]);

  expect(consoleSpy).toHaveBeenNthCalledWith(1, "실행 결과");
  expect(consoleSpy).toHaveBeenNthCalledWith(2, "pobi:3");
  expect(consoleSpy).toHaveBeenNthCalledWith(3, "rupi:10");

  consoleSpy.mockRestore();
});
