import Car from '../src/model/Car';

describe('Car 클래스 검증', () => {
  const name = 'pobi';

  test('자동차가 이동 조건을 만족할 경우 이동함', () => {
    const generator = jest.fn().mockReturnValue(Car.CAR_MOVE_MINIMUM_VALUE); // 이동 조건을 만족하도록 함
    const car = new Car(name, generator);
    const result = car.move();

    expect(result).toEqual({ name, move: Car.CAR_MOVE_SPEED });
    expect(generator).toHaveBeenCalled();
  });

  test('자동차가 이동 조건을 만족하지 못할 경우 이동하지 않음', () => {
    const generator = jest.fn().mockReturnValue(Car.CAR_MOVE_MINIMUM_VALUE - 1); // 이동 조건을 만족하지 않도록 함
    const car = new Car(name, generator);
    const result = car.move();

    expect(result).toEqual({ name, move: 0 });
    expect(generator).toHaveBeenCalled();
  });

  test('자동차가 여러 번 이동할 경우 이동 횟수만큼 이동량이 증가함', () => {
    const generator = jest.fn().mockReturnValue(Car.CAR_MOVE_MINIMUM_VALUE); // 이동 조건을 만족하도록 함
    const car = new Car(name, generator);

    car.move();
    car.move();

    expect(car.move()).toEqual({ name, move: Car.CAR_MOVE_SPEED * 3 }); // 총 3회 이동
  });
});
