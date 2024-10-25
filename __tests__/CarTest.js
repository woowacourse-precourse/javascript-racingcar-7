import Car from '../src/Car.js';
import { ERROR_MESSAGE } from '../src/constant.js';
import { errorString } from '../src/util.js';
import { getLogSpy, mockRandoms } from './ApplicationTest.js';

describe('Car 로직 테스트', () => {
  test('Car 객체 초기화 테스트', () => {
    // given
    const carName = 'zaeee';

    // when
    const car = new Car(carName);

    // then
    expect(car.getName()).toBe(carName);
    expect(car.getPosition()).toBe(0);
  });

  test('자동차 움직임 테스트', () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const carName = 'zaeee';

    mockRandoms([MOVING_FORWARD, STOP, MOVING_FORWARD]);

    // when
    const car = new Car(carName);
    car.move();
    car.move();
    car.move();

    // then
    expect(car.getPosition()).toBe(2);
  });

  test('자동차 현재 위치 출력 테스트', () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const carName = 'zaeee';
    const logSpy = getLogSpy();

    mockRandoms([MOVING_FORWARD, STOP, MOVING_FORWARD]);

    // when
    const car = new Car(carName);
    car.move();
    car.move();
    car.move();
    car.printCarPosition();

    // then
    expect(logSpy).toHaveBeenCalledWith('zaeee : --');
  });

  test('이름이 공백 혹은 빈 문자열일 경우 에러 처리', () => {
    // given
    const emptyCarName = '';
    const spaceCarName = '     ';

    // then
    expect(() => new Car(emptyCarName)).toThrow(
      errorString(ERROR_MESSAGE.MIN_CAR_NAME_LENGTH),
    );
    expect(() => new Car(spaceCarName)).toThrow(
      errorString(ERROR_MESSAGE.MIN_CAR_NAME_LENGTH),
    );
  });

  test('이름이 5자가 초과되는 경우 에러 처리', () => {
    // given
    const carName = 'zaeeee';

    // then
    expect(() => new Car(carName)).toThrow(
      errorString(ERROR_MESSAGE.MAX_CAR_NAME_LENGTH),
    );
  });
});
