import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();
    MissionUtils.Console.readLineAsync.mockImplementation(() => {
        const input = inputs.shift();
        return Promise.resolve(input);
    });
};

const mockRandoms = (numbers) => {
    MissionUtils.Random.pickNumberInRange = jest.fn();
    numbers.reduce((acc, number) => {
        return acc.mockReturnValueOnce(number);
    }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
};

describe("자동차 경주 기능 테스트", () => {
    test("자동차 경주 정상 동작", async () => {
        // given
        const MOVING_FORWARD = 4; // 이동하는 경우
        const STOP = 3;           // 멈추는 경우
        const inputs = ["pobi,woni", "1"]; // 입력값
        const logs = [
            "실행 결과",          // 실행 결과를 표시하는 로그 추가
            "pobi: -",           // pobi의 경과
            "woni: ",            // woni의 경과
            "최종 우승자: pobi"   // 최종 우승자
        ];
        const logSpy = getLogSpy();

        // mock 함수 설정
        mockQuestions(inputs);
        mockRandoms([MOVING_FORWARD, STOP]);

        // when
        const app = new App();
        await app.run();

        // then
        logs.forEach((log) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });
    });
});
