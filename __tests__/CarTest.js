import Car from '../src/Car.js';

describe('Car 클래스 테스트', () => {
  test('입력된 자동차 이름을 가진 자동차 인스턴스를 생성할 수 있다.', () => {
    const input = 'minji';
    const expectedCarName = 'minji';

    const car = new Car(input);

    expect(car).toBeInstanceOf(Car);
    expect(car.name).toBe(expectedCarName);
  });

  test('입력된 자동차 이름을 가진 자동차 인스턴스 여러 개를 생성할 수 있다.', () => {
    const input = 'minji,hyuk';
    const expectedCarNames = ['minji', 'hyuk'];

    const cars = input.split(',').map((carName) => new Car(carName));
    const carNames = cars.map((car) => car.name);

    expect(cars[0]).toBeInstanceOf(Car);
    expect(cars[1]).toBeInstanceOf(Car);
    expect(carNames).toEqual(expectedCarNames);
  });

  test('0에서 9사이의 값을 랜덤 추출할 수 있다.', () => {
    const carName = 'minji';
    const minNumber = 0;
    const maxNumber = 9;

    const car = new Car(carName);

    const randomNumber = car.getRandomNumber();

    expect(randomNumber).toBeGreaterThanOrEqual(minNumber);
    expect(randomNumber).toBeLessThanOrEqual(maxNumber);
  });

  test('랜덤 수가 4이상인 경우 자동차의 전진 횟수를 1증가할 수 있다.', () => {
    const randomNumber = 6;
    const carName = 'minji';

    const car = new Car(carName);
    const beforeMoveCount = car.forwardCount;

    car.moveForward(randomNumber);

    const currentMoveCount = car.forwardCount;

    expect(currentMoveCount).toBe(beforeMoveCount + 1);
  });

  test('자동차 이름과 현재까지의 전진 횟수를 구할 수 있다.', () => {
    const carName = 'minji';
    const randomNumbers = [4, 2, 7];
    const expectedCarName = 'minji';
    const expectedForwardCount = 2;

    const car = new Car(carName);

    randomNumbers.map((randomNumber) => car.moveForward(randomNumber));

    expect(car.name).toBe(expectedCarName);
    expect(car.forwardCount).toBe(expectedForwardCount);
  });
});
