import { Car } from './Car';

describe('Car 객체', () => {
  const car = new Car('kim');
  test('name이 kim이고 distance가 0인 Car 객체 생성', () => {
    expect(car).toEqual({ name: 'kim', distance: 0 });
  }),
    test('move 메서드 1번 실행시 1칸 이동', () => {
      car.move();
      expect(car.distance).toBe(1);
    });
});
