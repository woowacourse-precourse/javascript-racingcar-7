import Car from '../src/domain/Car.js';
import { describe, test, expect } from '@jest/globals';

describe('Car 클래스 테스트', () => {
    test('자동차 객체가 정상적으로 생성된다', () => {
        const car = new Car('pobi');
        expect(car.getName()).toBe('pobi');
        expect(car.getPosition()).toBe(0);
    });

    test('자동차 이름이 5자를 초과하면 에러가 발생한다', () => {
        expect(() => {
            new Car('pobiii');
        }).toThrow('[ERROR] 자동차 이름은 5자 이하여야 합니다.');
    });

    test('4 이상의 숫자가 나오면 자동차가 전진한다', () => {
        const car = new Car('pobi');
        car.move(4);
        expect(car.getPosition()).toBe(1);
    });

    test('3 이하의 숫자가 나오면 자동차가 멈춘다', () => {
        const car = new Car('pobi');
        car.move(3);
        expect(car.getPosition()).toBe(0);
    });
});