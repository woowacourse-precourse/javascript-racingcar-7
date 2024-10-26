import App, { MOVING_FORWARD, STOP } from '../src/App.js';
import { getLogSpy, mockQuestions, mockRandoms } from '../utils/testUtils.js';

describe('자동차 경주', () => {
    test.each([
        [
            '단독 우승 테스트',
            ['pobi,woni', '1'],
            ['pobi : -', 'woni : ', '최종 우승자 : pobi'],
            [MOVING_FORWARD, STOP],
        ],
        [
            '공동 우승 테스트',
            ['pobi,woni', '2'],
            [
                'pobi : -',
                'woni : -',
                'pobi : --',
                'woni : --',
                '최종 우승자 : pobi,woni',
            ],
            [MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD],
        ],
        [
            '3대 이상 자동차 테스트',
            ['pobi,woni,jun', '2'],
            [
                'pobi : -',
                'woni : -',
                'jun : -',
                'pobi : --',
                'woni : --',
                'jun : -',
                '최종 우승자 : pobi,woni',
            ],
            [
                MOVING_FORWARD,
                MOVING_FORWARD,
                MOVING_FORWARD,
                MOVING_FORWARD,
                MOVING_FORWARD,
                STOP,
            ],
        ],
    ])('%s', async (testName, inputs, logs, random) => {
        const logSpy = getLogSpy();
        mockQuestions(inputs);
        mockRandoms(random);

        const app = new App();
        await app.run();

        logs.forEach((log) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });
    });
});
