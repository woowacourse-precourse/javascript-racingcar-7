import RacingCarController from "../src/controllers/RacingCarController.js";
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

describe("RacingCarController 클래스 자동자 경주 전체 테스트", () => {

    test("자동자 경주 정상 기능 테스트", async () => {
        const MOVING_FORWARD = 4;
        const STOP = 3;
        const inputs = ["hong,jihun,hanso", "4"];
        const executionResult = [
            STOP, MOVING_FORWARD, STOP,
            MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD,
            STOP, MOVING_FORWARD, MOVING_FORWARD,
            STOP, STOP, STOP
        ];

        const logs = [
            "hong : -", 
            "jihun : ---", 
            "hanso : --", 
            "최종 우승자 : jihun"
        ];
        const logSpy = getLogSpy();

        mockQuestions(inputs);
        mockRandoms([...executionResult]);

        const racingCarController = new RacingCarController();
        await racingCarController.racingCarProcess();

        logs.forEach((log) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });
    });

    test("잘못된 자동차 이름을 입력했을 경우 예외처리를 발생한다.", async () => {
        const inputs = ["jeehoon,pobi"];
        mockQuestions(inputs);
        const racingCarController = new RacingCarController();
        await expect(racingCarController.getInputCarNames()).rejects.toThrow("[ERROR]");
    });

    test("잘못된 시도 횟수를 입력했을 경우 예외처리를 발생한다.", async () => {
        const inputs = ['-4'];
        mockQuestions(inputs);
        const racingCarController = new RacingCarController();
        await expect(racingCarController.getInputAttemptCount()).rejects.toThrow("[ERROR]");
    });
});
