import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

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
    const logSpy = jest.spyOn(MissionUtils.Console, 'print');
    logSpy.mockClear();
    return logSpy;
};

describe('자동차 경주', () => {
    test('기능 테스트', async () => {
        // given
        const MOVING_FORWARD = 4;
        const STOP = 3;
        const inputs = ['pobi,woni', '1'];
        const logs = ['pobi : -', 'woni : ', '최종 우승자 : pobi'];
        const logSpy = getLogSpy();

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

    test('예외 테스트', async () => {
        // given
        const inputs = ['pobi,javaji'];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow('[ERROR]');
    });
});

test('예외 테스트 - 자동차 이름이 5글자를 초과하는 경우', async () => {
    // given
    const inputs = ['pobi,helloworld,woni'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR] 자동차 이름이 5글자를 초과');
});

test('예외 테스트 - 자동차 이름이 빈 문자열인 경우', async () => {
    // given
    const inputs = ['pobi,,woni'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR] 빈 문자열이 자동차 이름으로 설정 되어 있음');
});

test('예외 테스트 - 시도 횟수가 숫자가 아닌 경우', async () => {
    // given
    const inputs = ['pobi,woni', 'abc'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR] 시도 횟수가 숫자가 아님');
});

test('예외 테스트 - 시도 횟수가 0이거나 음수인 경우', async () => {
    // given
    const inputs = ['pobi,woni', '-1'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR] 시도 횟수가 0이거나 음수');
});
