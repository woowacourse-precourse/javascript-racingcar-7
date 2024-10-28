// __tests__/App.test.js
import { Console, MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App';

jest.mock('@woowacourse/mission-utils', () => ({
    Console: {
        readLineAsync: jest.fn(),
        print: jest.fn(),
    }
}));

describe('App', () => {
    let app;

    beforeEach(() => {
        app = new App();
    });

    test('자동차 이름 입력 테스트', async () => {
        Console.readLineAsync.mockResolvedValueOnce('car1,car2,car3');
        const carNames = await app.carNameInput();
        expect(carNames).toEqual(['car1 : ', 'car2 : ', 'car3 : ']);
    });

    test('자동차 이름 입력 유효성 검사 테스트', async () => {
        Console.readLineAsync.mockResolvedValueOnce('car1,car2,car3!');
        await expect(app.carNameInput()).rejects.toThrow("[ERROR] 자동차 이름은 영문자와 숫자만 포함할 수 있습니다.");
    });

    test('자동차 이름 길이 유효성 검사 테스트', () => {
        expect(() => app.formatCarName('car123')).toThrow("[ERROR] 자동차 이름은 5글자를 초과할 수 없습니다.");
    });

    test('시도 횟수 입력 테스트', async () => {
        Console.readLineAsync.mockResolvedValueOnce('5');
        const count = await app.countInput();
        expect(count).toBe(5);
    });

    test('시도 횟수 유효성 검사 테스트', async () => {
        Console.readLineAsync.mockResolvedValueOnce('0');
        await expect(app.countInput()).rejects.toThrow("[ERROR] 시도 횟수는 1 이상이어야 합니다.");
    });

    test('게임 결과 출력 테스트', async () => {
        app.result = ['car1 : --', 'car2 : -', 'car3 : ---'];
        app.printResult();
        expect(Console.print).toHaveBeenCalledWith('car1 : --');
        expect(Console.print).toHaveBeenCalledWith('car2 : -');
        expect(Console.print).toHaveBeenCalledWith('car3 : ---');
    });

    test('우승자 출력 테스트', () => {
        app.result = ['car1 : --', 'car2 : -', 'car3 : ---'];
        app.printWinners();
        expect(Console.print).toHaveBeenCalledWith('최종 우승자 : car3');
    });

    test('우승자 여러 명 출력 테스트', () => {
        app.result = ['car1 : ---', 'car2 : ---', 'car3 : --'];
        app.printWinners();
        expect(Console.print).toHaveBeenCalledWith('최종 우승자 : car1, car2');
    });
});