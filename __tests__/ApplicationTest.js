import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import {
    increaseCarDistance,
    isValueMoreThanFour,
} from '../src/function/carRacingFunctions.js';
import {
    getMaxDistance,
    getWinnerCarNameArrayWithMaxValue,
} from '../src/function/carRacingResultFunctions.js';
import Car from '../src/Car.js';

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

    test('예외테스트 : 입력받은 이름이 5글자 초과일 경우', async () => {
        const inputs = ['abc,abcdef'];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow(
            '[ERROR] 자동차 이름은 5글자 이하로 입력해주세요.',
        );
    });

    test('예외테스트 : 쉼표(,) 이외에 다른 구분자를 사용하는 경우', async () => {
        const inputs = ['abc.abc:def'];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow(
            '[ERROR] 이름은 쉼표(,)로 구분 가능합니다.',
        );
    });

    test('예외테스트 : 공백을 입력한 경우', async () => {
        const inputs = [' '];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow(
            '[ERROR] 경주할 자동차 이름을 입력하세요',
        );
    });

    test('예외테스트 : 아무것도 입력하지 않은 경우', async () => {
        const inputs = [''];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow(
            '[ERROR] 경주할 자동차 이름을 입력하세요',
        );
    });

    test('예외테스트 : 시도할 횟수가 0회인 경우 ERROR', async () => {
        const inputs = ['abc,de', '0'];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow(
            '[ERROR] 시도할 횟수가 0보다 커야 경기가 시작됩니다.',
        );
    });

    test('예외테스트 : 시도할 횟수가 공백인 경우', async () => {
        const inputs = ['abc,de', ''];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow(
            '[ERROR] 시도할 횟수를 입력해주세요.',
        );
    });

    test('예외테스트 : 시도할 횟수를 입력하지 않은 경우', async () => {
        const inputs = ['abc,de', ' '];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow(
            '[ERROR] 시도할 횟수를 입력해주세요.',
        );
    });

    test('랜덤값이 4가 넘는가? isValueMoreThanFour()', () => {
        expect(isValueMoreThanFour(5)).toBe(true);
    });

    test('자동차의 거리가 1 증가하는가?', () => {
        const car = new Car({ name: 'carName', distance: 1 });

        increaseCarDistance(car);

        expect(car.distance).toEqual(2);
    });

    test('자동차 배열중 최대 거리 값이 출력되는가? getMaxDistance()', () => {
        const carArray = [
            new Car({ name: 'carA', distance: 1 }),
            new Car({ name: 'carB', distance: 3 }),
            new Car({ name: 'carC', distance: 2 }),
        ];
        expect(getMaxDistance(carArray)).toBe(3);
    });

    test('최대 거리값으로 이긴 자동차들의 이름 배열이 반환되는가?', () => {
        const carArray = [
            new Car({ name: 'carA', distance: 1 }),
            new Car({ name: 'carB', distance: 3 }),
            new Car({ name: 'carC', distance: 3 }),
        ];

        const maxDistance = 3;

        expect(
            getWinnerCarNameArrayWithMaxValue(carArray, maxDistance),
        ).toEqual(['carB', 'carC']);
    });
});
