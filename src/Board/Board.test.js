import Board from './Board.js';
import { Console } from "@woowacourse/mission-utils";
import { jest, describe, beforeEach, test, expect } from "@jest/globals";

const mockPrint = jest.fn();

jest.mock("@woowacourse/mission-utils", () => {
    return {
        Console: {
            print: mockPrint
        }
    };
});


describe("Board 클래스 관련 테스트", () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe("생성자 테스트", () => {
        test("각 차마다 클래스가 생성되어야 한다.", () => {
            const cars = [
                { getName: () => 'car1', getState: () => 3 },
                { getName: () => 'car2', getState: () => 2 }
            ];
            const board = new Board(cars);
            expect(board.cars).toEqual(cars);
        });
    });

    test("전진상태를 정확히 받아 대시로 표현한다.", () => {
        const board = new Board([]);
        const result = board.statusChangeDash('car1', 3);
        expect(result).toBe('car1 : ---');
    });
});

describe("우승자 출력에 관한 테스트", () => {
    test("단일 우승자일 경우 우승자 한명만 출력한다.", () => {
        const cars = [
            {getName: () => "car1", getState: () => 5},
            {getName: () => "car2", getState: () => 3}
        ];
        const board = new Board(cars);
        expect(board.getWinner()).toBe("car1");
    });

    test("공동 우승자일 경우 우승자를 모두 출력한다.", () => {
        const cars = [
            {getName: () => "car1", getState: () => 5},
            {getName: () => "car2", getState: () => 5},
            {getName: () => "car3", getState: () => 3}
        ];
        const board = new Board(cars);
        expect(board.getWinner()).toBe("car1, car2");
    });
});