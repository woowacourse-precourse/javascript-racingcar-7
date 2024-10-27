import Car from '../src/car.js';

describe('자동차 기능 테스트', () => {
  test('자동차 이름 생성 테스트', async () => {
    const carName = 'tenen';

    const car = new Car(carName);

    expect(car.name).toBe(carName);
  });

  test('자동차 움직인 거리 테스트', async () => {
    const carName = 'tenen';
    const moveCount = 3;
    const car = new Car(carName);

    Array.from({ length: moveCount }).forEach(() => car.move());

    expect(car.moveCount).toBe(moveCount);
  });
});
