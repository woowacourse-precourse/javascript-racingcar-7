import Car from '../src/components/Car';
import Rules from '../src/resources/Rules';

describe('Car 클래스 테스트', () => {
  describe('생성자', () => {
    test('Car 인스턴스를 생성하면 자동차의 이름과 현재 위치가 설정된다.', () => {
      const car = new Car('Woo');
      expect(car.name).toBe('Woo');
      expect(car.currentDistance).toBe(Rules.INITIAL_DISTANCE);
    });
  });

  describe('moveForward 메서드', () => {
    test('moveForward 메서드를 호출하면 이동 거리가 증가한다.', () => {
      const car = new Car('Woo');
      car.moveForward();
      expect(car.currentDistance).toBe(
        Rules.INITIAL_DISTANCE + Rules.MOVE_LENGTH,
      );
    });
  });

  describe('getStatus 메서드', () => {
    test('getStatus 메서드는 현재 이름과 거리를 객체로 반환한다.', () => {
      const car = new Car('Woo');
      car.moveForward();
      const status = car.getStatus();
      expect(status).toEqual({
        name: 'Woo',
        distance: Rules.INITIAL_DISTANCE + Rules.MOVE_LENGTH,
      });
    });
  });
});
