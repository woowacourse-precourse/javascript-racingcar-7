import App from "../src/App.js";
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

  test("자동차 이름이 공백일 때 오류 발생", async () => {
    Console.readLineAsync.mockResolvedValueOnce("kim,,Joe"); // 공백 포함

    await expect(app.run()).rejects.toThrow("[ERROR] 자동차 이름은 공백으로 둘 수 없습니다.");
  });

  test("중복된 자동차 이름이 있을 때 오류 발생", async () => {
    Console.readLineAsync.mockResolvedValueOnce("kim,Joe,kim"); // 중복 이름

    await expect(app.run()).rejects.toThrow("[ERROR] 자동차 이름은 중복될 수 없습니다.");
  });

  test("이동 횟수가 정수가 아닐 때 오류 발생", async () => {
    Console.readLineAsync.mockResolvedValueOnce("kim,Joe");
    Console.readLineAsync.mockResolvedValueOnce("5.5"); // 비정수 이동 횟수

    await expect(app.run()).rejects.toThrow("[ERROR] 시도할 횟수는 1 이상의 정수여야 합니다.");
  });

  test("최종 우승자 출력 확인", async () => {
    Console.readLineAsync.mockResolvedValueOnce("Tom,Jerry"); // 자동차 이름 입력
    Console.readLineAsync.mockResolvedValueOnce("3"); // 이동 횟수 입력

    await app.run();

    // 라운드별 결과 출력 확인
    expect(Console.print).toHaveBeenCalledWith(expect.stringContaining("Tom :"));
    expect(Console.print).toHaveBeenCalledWith(expect.stringContaining("Jerry :"));
    expect(Console.print).toHaveBeenCalledWith(expect.stringContaining("최종 우승자 :"));
  });
});
