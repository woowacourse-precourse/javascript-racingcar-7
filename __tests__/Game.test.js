jest.mock('@woowacourse/mission-utils', () => ({
    Random: {
        pickNumberInRange: jest.fn()
    }
}));

import { describe, test, expect, jest, beforeEach } from '@jest/globals';
import Game from '../src/domain/Game.js';
import { Random } from '@woowacourse/mission-utils';

describe('Game 클래스 테스트', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('게임이 정상적으로 진행된다', async () => {
        const game = new Game(['pobi', 'woni'], 1);
        Random.pickNumberInRange
            .mockResolvedValueOnce(4)  // pobi 이동
            .mockResolvedValueOnce(3); // woni 멈춤

        await game.play();
        const positions = game.getCurrentPositions();

        expect(positions[0].position).toBe(1);  // pobi
        expect(positions[1].position).toBe(0);  // woni
    });

    test('우승자가 정확히 결정된다', async () => {
        const game = new Game(['pobi', 'woni'], 2);
        Random.pickNumberInRange
            .mockResolvedValueOnce(4)  // pobi 이동
            .mockResolvedValueOnce(4)  // woni 이동
            .mockResolvedValueOnce(4)  // pobi 이동
            .mockResolvedValueOnce(3); // woni 멈춤

        await game.play();
        const winners = game.getWinners();

        expect(winners).toContain('pobi');
        expect(winners).not.toContain('woni');
    });
});