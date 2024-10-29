import Car from '../../src/game/Car.js';
import { FORWARD_THRESHOLD } from '../../src/constant/constants.js';

const testCases = [
  ['Hello', 3, 0, '랜덤 값이 낮아 이동하지 않음'],       // randomNumber < FORWARD_THRESHOLD
  ['Haki', FORWARD_THRESHOLD, 1, '랜덤 값이 임계값과 같음'], // randomNumber == FORWARD_THRESHOLD
  ['wap', 10, 1, '랜덤 값이 임계값보다 높아 이동함'],       // randomNumber > FORWARD_THRESHOLD
];

describe('Car 클래스 테스트', () => {
  test('초기 위치는 0이어야 합니다.', () => {
    const car = new Car('Hello');
    expect(car.getPosition()).toBe(0);
  });

  test.each(testCases)(
    '%s: 임의 값 %d -> 예상 위치 %d (%s)',
    (name, randomNumber, expectedPosition) => {
      const car = new Car(name);
      car.checkAndMoveForward(randomNumber);
      expect(car.getPosition()).toBe(expectedPosition);
    }
  );
});
