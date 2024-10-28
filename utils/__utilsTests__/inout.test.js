import { getCarsInfo, getCountInfo, printStage, printWinners } from '../inout.js';
import { Console } from '@woowacourse/mission-utils';

jest.mock('@woowacourse/mission-utils', () => ({
    Console: {
        readLineAsync: jest.fn(),
        print: jest.fn(),
    },
}));

describe('inout', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('getCarsInfo', () => {
        it('문자열을 입력받아 배열로 반환한다', async () => {
            Console.readLineAsync.mockResolvedValueOnce('car1,car2,car3');
            const cars = await getCarsInfo(); // 비동기 대기
            expect(cars).toEqual(['car1', 'car2', 'car3']);
        });

        it('입력값이 비어있는 경우', async () => {
            Console.readLineAsync.mockResolvedValueOnce('');
            await expect(getCarsInfo()).rejects.toThrow('[ERROR] 유효하지 않은 입력입니다.');
        });

        it('글자수 5자 제한', async () => {
            Console.readLineAsync.mockResolvedValueOnce('carcar1,car2');
            await expect(getCarsInfo()).rejects.toThrow('[ERROR] 유효하지 않은 입력입니다.');
        });

        it('비어있는 이름이 있는 경우 1', async () => {
            Console.readLineAsync.mockResolvedValueOnce('car1,,car3');
            await expect(getCarsInfo()).rejects.toThrow('[ERROR] 유효하지 않은 입력입니다.');
        });

        it('비어있는 이름이 있는 경우 2', async () => {
            Console.readLineAsync.mockResolvedValueOnce(',car2,car3');
            await expect(getCarsInfo()).rejects.toThrow('[ERROR] 유효하지 않은 입력입니다.');
        });

        it('비어있는 이름이 있는 경우 3', async () => {
            Console.readLineAsync.mockResolvedValueOnce(',,');
            await expect(getCarsInfo()).rejects.toThrow('[ERROR] 유효하지 않은 입력입니다.');
        });
    });

    describe('getCountInfo', () => {
        it('숫자를 입력', async () => {
            Console.readLineAsync.mockResolvedValueOnce('5');
            const count = await getCountInfo();
            expect(count).toBe(5);
        });

        it('입력값이 비어있는 경우', async () => {
            Console.readLineAsync.mockResolvedValueOnce('');
            await expect(getCountInfo()).rejects.toThrow('[ERROR] 유효하지 않은 입력입니다.');
        });

        it('숫자가 아닌 경우', async () => {
            Console.readLineAsync.mockResolvedValueOnce('abc');
            await expect(getCountInfo()).rejects.toThrow('[ERROR] 유효하지 않은 입력입니다.');
        });

        it('0 또는 음수 입력', async () => {
            Console.readLineAsync.mockResolvedValueOnce('-1');
            await expect(getCountInfo()).rejects.toThrow('[ERROR] 유효하지 않은 입력입니다.');
        });
    });

    describe('printStage', () => {
        it('시도별 출력', () => {
            const carMap = new Map([
                ['car1', 3],
                ['car2', 5],
                ['car3', 2],
            ]);

            printStage(carMap);

            expect(Console.print).toHaveBeenCalledWith('car1 : ---');
            expect(Console.print).toHaveBeenCalledWith('car2 : -----');
            expect(Console.print).toHaveBeenCalledWith('car3 : --');
            expect(Console.print).toHaveBeenCalledWith('');
        });
    });

    describe('printWinners', () => {
        it('우승자 출력', () => {
            const winners = ['car1', 'car3'];
            printWinners(winners);
            expect(Console.print).toHaveBeenCalledWith('최종 우승자 : car1, car3');
        });
    });
});