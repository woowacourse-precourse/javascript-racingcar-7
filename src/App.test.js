import {Console, Random} from "@woowacourse/mission-utils";
import App from "./App.js";

// Console과 Random 메서드 Mock 설정
jest.mock("@woowacourse/mission-utils", () => ({
  Console: {
    readLineAsync: jest.fn(),
    print: jest.fn(),
  },
  Random: {
    pickNumberInRange: jest.fn(),
  },
}));

describe("자동차 경주 게임", () => {
  let app;

  beforeEach(() => {
    app = new App();
    Console.readLineAsync.mockClear();
    Console.print.mockClear();
    Random.pickNumberInRange.mockClear();
  });

  test("자동차 이름 입력 및 검증 - 유효한 입력", async () => {
    Console.readLineAsync
      .mockResolvedValueOnce("Venti,Lambi,Ferri") // 자동차 이름 입력
      .mockResolvedValueOnce("3"); // 시도 횟수 입력

    await expect(app.run()).resolves.not.toThrow();

    expect(Console.readLineAsync).toHaveBeenCalledWith(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    expect(Console.readLineAsync).toHaveBeenCalledWith(
      "시도할 횟수는 몇 회인가요?"
    );
    expect(Console.print).toHaveBeenCalledWith(
      "입력한 자동차 이름: Venti, Lambi, Ferri"
    );
    expect(Console.print).toHaveBeenCalledWith("시도할 횟수: 3");
  });

  test("자동차 이름 입력 및 검증 - 무효한 입력 (길이 초과)", async () => {
    Console.readLineAsync
      .mockResolvedValueOnce("Venti,Lambi,Ferrie"); // 무효한 입력만 설정

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 자동차 이름은 최소 1자 이상, 최대 5자 이하이어야 합니다."
    );
  });

  test("시도 횟수 입력 및 검증 - 유효한 입력", async () => {
    Console.readLineAsync
      .mockResolvedValueOnce("Venti,Lambi,Ferri") // 유효한 자동차 이름
      .mockResolvedValueOnce("5"); // 유효한 시도 횟수

    await expect(app.run()).resolves.not.toThrow();
  });

  test("시도 횟수 입력 및 검증 - 무효한 입력 (음수)", async () => {
    Console.readLineAsync
      .mockResolvedValueOnce("Venti,Lambi,Ferri") // 자동차 이름 입력
      .mockResolvedValueOnce("-3"); // 무효한 시도 횟수 입력

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 시도 횟수는 0 이상의 정수여야 합니다."
    );

    expect(Console.readLineAsync).toHaveBeenCalledWith(
      "시도할 횟수는 몇 회인가요?"
    );
  });

  test("자동차 전진 로직 - 전진", async () => {
    Console.readLineAsync
      .mockResolvedValueOnce("Venti,Lambi,Ferri")
      .mockResolvedValueOnce("1");
    Random.pickNumberInRange.mockReturnValue(5);

    await expect(app.run()).resolves.not.toThrow();

    expect(Random.pickNumberInRange).toHaveBeenCalledWith(0, 9);
    expect(Console.print).toHaveBeenCalledWith("Venti : -");
    expect(Console.print).toHaveBeenCalledWith("Lambi : -");
    expect(Console.print).toHaveBeenCalledWith("Ferri : -");
  });

  test("자동차 전진 로직 - 정지", async () => {
    Console.readLineAsync
      .mockResolvedValueOnce("Venti,Lambi,Ferri") // 자동차 이름 입력
      .mockResolvedValueOnce("1"); // 시도 횟수 입력
    Random.pickNumberInRange.mockReturnValue(3); // 전진 조건 미달

    await expect(app.run()).resolves.not.toThrow();

    expect(Random.pickNumberInRange).toHaveBeenCalledWith(0, 9);
    expect(Console.print).toHaveBeenCalledWith("Venti : ");
    expect(Console.print).toHaveBeenCalledWith("Lambi : ");
    expect(Console.print).toHaveBeenCalledWith("Ferri : ");
    expect(Console.print).toHaveBeenCalledWith(
      "최종 우승자: Venti, Lambi, Ferri"
    );
  });

  test("자동차 경주 - 예외 테스트 (무효한 이름 입력)", async () => {
    Console.readLineAsync
      .mockResolvedValueOnce("Venti,Lambi,Ferrie") // 무효한 입력 (Ferrie는 6자)
      .mockResolvedValueOnce("1"); // 시도 횟수 입력

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 자동차 이름은 최소 1자 이상, 최대 5자 이하이어야 합니다."
    );

    expect(Console.readLineAsync).toHaveBeenCalledWith(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
  });
});
