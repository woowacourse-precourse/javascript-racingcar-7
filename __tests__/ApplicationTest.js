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

    test('예외 테스트 2: 자동차 이름이 5자를 초과할 경우', async () => {
        // given
        const inputs = ['kiyeon,hyesung'];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow(
            '[ERROR] 자동차 이름은 5자 이하만 가능합니다.'
        );
    });

    test('예외 테스트 3: 자동차 이름을 입력하지 않을 경우', async () => {
        // given
        const inputs = [''];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow(
            '[ERROR] 자동차 이름은 비어있을 수 없습니다.'
        );
    });

    test('예외 테스트 4: 자동차 이름이 중복될 경우', async () => {
        // given
        const inputs = ['hey,hey'];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow(
            '[ERROR] 자동차 이름은 대소문자를 구분하지 않고 중복될 수 없습니다.'
        );
    });
});
