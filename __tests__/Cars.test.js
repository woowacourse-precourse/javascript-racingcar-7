import Cars from '../src/domain/Cars.js';
import { describe, test, expect } from '@jest/globals';

describe('Cars 클래스 테스트', () => {
    test('자동차들의 위치 정보를 정상적으로 반환한다', () => {
        const cars = new Cars(['pobi', 'woni']);
        const positions = cars.getCarPositions();

        expect(positions).toHaveLength(2);
        expect(positions[0]).toEqual({
            name: 'pobi',
            position: 0
        });
    });

    test('자동차들을 주어진 숫자 배열에 따라 이동시킨다', () => {
        const cars = new Cars(['pobi', 'woni']);
        cars.moveCars([4, 3]);  // pobi는 이동, woni는 멈춤

        const positions = cars.getCarPositions();
        expect(positions[0].position).toBe(1);  // pobi
        expect(positions[1].position).toBe(0);  // woni
    });

    test('우승자를 정확히 찾아낸다', () => {
        const cars = new Cars(['pobi', 'woni', 'jun']);
        cars.moveCars([4, 4, 3]);  // pobi와 woni는 이동, jun은 멈춤
        cars.moveCars([4, 3, 3]);  // pobi만 이동

        const winners = cars.findWinners();
        expect(winners).toContain('pobi');
        expect(winners).toHaveLength(1);
    });

    test('공동 우승자를 모두 찾아낸다', () => {
        const cars = new Cars(['pobi', 'woni']);
        cars.moveCars([4, 4]);  // 둘 다 이동

        const winners = cars.findWinners();
        expect(winners).toContain('pobi');
        expect(winners).toContain('woni');
        expect(winners).toHaveLength(2);
    });
});