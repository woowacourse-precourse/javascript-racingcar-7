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

  //async와 await으로 비동기 코드 관리
  test("정상적으로 우승자가 출력되는지 확인", async () => {
    //테스트 입력값 설정 : 자동차에 부여 이름과 이동 횟수
    Console.readLineAsync.mockResolvedValueOnce("judy,jaden"); //첫 번째 호출 : 자동차에 부여한 이름
    Console.readLineAsync.mockResolvedValueOnce("6"); //두 번째 호출 : 자동차 이동 횟수

    //App 실행
    await app.run();

    //출력값 확인 : 각 자동차 입력 결과와 우승자 출력
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
