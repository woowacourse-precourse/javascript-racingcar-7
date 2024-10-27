import App from "../src/App";
import { Console } from "@woowacourse/mission-utils";

describe("App 테스트", () => {
  let app;

  beforeEach(() => {
    app = new App();
    jest.spyOn(Console, "readLineAsync").mockImplementation();
    jest.spyOn(Console, "print").mockImplementation();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("정상적으로 우승자가 출력되는지 확인", async () => {
    Console.readLineAsync.mockResolvedValueOnce("judy,jaden");
    Console.readLineAsync.mockResolvedValueOnce("6");

    await app.run();

    expect(Console.print).toHaveBeenCalledWith(
      expect.stringContaining("judy :")
    );
    expect(Console.print).toHaveBeenCalledWith(
      expect.stringContaining("jaden :")
    );
    expect(Console.print).toHaveBeenCalledWith(
      expect.stringContaining("최종 우승자 :")
    );
  });
});
