import View from "../src/View/View";

describe("View Tests", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log");
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("View Result Test", () => {
    const view = new View();

    view.outputResult([
      { name: "pobi", distance: 3 },
      { name: "rupi", distance: 10 },
    ]);

    expect(consoleSpy).toHaveBeenNthCalledWith(1, "실행 결과");
    expect(consoleSpy).toHaveBeenNthCalledWith(2, "pobi : 3");
    expect(consoleSpy).toHaveBeenNthCalledWith(3, "rupi : 10");
  });

  test("View Winner Test", () => {
    const view = new View();

    view.outputWinner(["pobi", "rupi", "wolf"]);

    expect(consoleSpy).toHaveBeenCalledWith("최종 우승자 : pobi, rupi, wolf");
  });
});
