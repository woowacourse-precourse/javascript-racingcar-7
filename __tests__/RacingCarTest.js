import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE } from "../src/utils/ErrorMessage.js";
import { getWinners } from "../src/race/WinnerSelector.js";
import App from "../src/App.js";
import Car from "../src/race/Car.js";
import CarManager from "../src/race/CarManager.js";
import RaceExecutor from "../src/race/RaceExecutor.js";

const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();


    MissionUtils.Console.readLineAsync.mockImplementation(() => {
        const input = inputs.shift();
        return Promise.resolve(input);
    });
};

const mockRandoms = (numbers) => {
    MissionUtils.Random.pickNumberInRange = jest.fn();

    numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
};

describe('경주 기능 테스트', () => {
    const getTestCars = () => [
        new Car('pobi'),
        new Car('woni')
    ];

    test("입력받은 자동차명을 쉼표(,)를 기준으로 구분하여 자동차 객체 리스트로 변환할 수 있다.", async () => {
        // given
        const inputs = ['pobi,woni,hwa'];
        const expectCars = inputs[0].split(',').map((name) => new Car(name));
        mockQuestions(inputs);

        // when
        const carManager = new CarManager();
        const receiveCars = carManager.getCars();

        // then
        await expect(receiveCars).resolves.toEqual(expectCars);
    });

    test("이동 시도 횟수만큼 시도하여 경주 실행 결과를 출력할 수 있다.", () => {
        // given
        const raceExecutor = new RaceExecutor();
        const MOVING_FORWARD = 4;
        const STOP = 3;
        const cars = getTestCars();
        const moveTryCount = 2;
        const logs = ["실행 결과", "pobi : -", "woni : -", "pobi : --", "woni : -"];
        const logSpy = getLogSpy();

        mockRandoms([MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD, STOP]);

        // when
        raceExecutor.executeForMoveTryCount(cars, moveTryCount);

        // then
        logs.forEach((log) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });
    });

    test("경주 결과를 포함한 자동차 목록을 확인하여 한명의 우승자를 출력할 수 있다.", () => {
        // given
        const cars = getTestCars();
        cars[0].moveForward();

        const expectWinnerNames = ['pobi'];

        // when
        const winnerNames = getWinners(cars);

        // then
        expect(winnerNames).toEqual(expectWinnerNames);
    });

    test("경주 결과를 포함한 자동차 목록을 확인하여 여러명의 우승자를 출력할 수 있다.", () => {
        // given
        const cars = getTestCars();
        cars[0].moveForward();
        cars[1].moveForward();

        const expectWinnerNames = ['pobi', 'woni'];

        // when
        const winnerNames = getWinners(cars);

        // then
        expect(winnerNames).toEqual(expectWinnerNames);
    });

});

describe('예외 테스트', () => {
    let app;
    beforeAll(() => {
        app = new App();
    });

    describe('자동차명 유효성 검사', () => {
        const NAME_NAX_LENGTH = 5;

        test("자동차명 입력 시 공백을 입력할 수 없습니다.", async () => {
            // given
            const inputs = [''];
            mockQuestions(inputs);

            // when
            // then
            await expect(app.run()).rejects.toThrow(ERROR_MESSAGE.EMPTY_INPUT_NOT_ALLOW);
        });

        test("자동차명으로 빈값을 입력할 수 없습니다.", async () => {
            // given
            const inputs = ['pobi,,woni'];
            mockQuestions(inputs);

            // when
            // then
            await expect(app.run()).rejects.toThrow(ERROR_MESSAGE.EMPTY_INPUT_NOT_ALLOW);
        });

        test(`자동차명이 ${NAME_NAX_LENGTH}자를 초과할 수 없습니다.`, async () => {
            // given
            const errorName = 'pineapple';
            const input = [`pobi,${errorName}`];
            mockQuestions(input);

            // when
            // then
            await expect(app.run()).rejects.toThrow(ERROR_MESSAGE.NAME_LENGTH_EXCEEDED(NAME_NAX_LENGTH, errorName));
        });

        test("자동차명에 특수문자는 포함될 수 없습니다.", async () => {
            // given
            const errorName = 'woni@';
            const input = [`pobi,${errorName}`];
            mockQuestions(input);

            await expect(app.run()).rejects.toThrow(ERROR_MESSAGE.ONLY_USED_ENGLISH_AND_NUMBER(errorName));
        });

        test("자동차명은 한글로 입력될 수 없습니다.", async () => {
            // given
            const errorName = '포비';
            const input = [`pobi,${errorName}`];
            mockQuestions(input);

            await expect(app.run()).rejects.toThrow(ERROR_MESSAGE.ONLY_USED_ENGLISH_AND_NUMBER(errorName));
        });

        test("중복된 자동차명은 사용할 수 없습니다.", async () => {
            // given
            const duplicateName = 'pobi';
            const input = [`${duplicateName},woni,${duplicateName}`];
            mockQuestions(input);

            await expect(app.run()).rejects.toThrow(ERROR_MESSAGE.EXIST_DUPLICATE_NAME(duplicateName));
        });
    });

    describe("자동차 전진 시도 횟수 유효성 검사", () => {
        const MAX_RACING_COUNT = 100;

        test(`입력된 전진 시도 횟수가 ${MAX_RACING_COUNT}회를 초과할 수 없습니다.`, async () => {
            const racingCount = 101;

            // given
            const inputs = ["pobi,woni", racingCount];
            mockQuestions(inputs);


            await expect(app.run()).rejects.toThrow(ERROR_MESSAGE.RACING_COUNT_EXCEEDED(MAX_RACING_COUNT, racingCount));
        });
    });
});
