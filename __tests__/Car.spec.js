import Car from '../src/domain/Car.js';
import { FORWARD_NUM } from '../src/constants/constants.js';

describe('단위 테스트: Car 클래스', () => {
  test('차량 이름 및 전진 횟수 배열 초기화', () => {
    // given
    const carNames = ['pobi', 'woni', 'jun'];

    // when
    const car = new Car(carNames);

    // then
    expect(car.carNames).toEqual(carNames);
    expect(car.forwardCounts).toEqual([0, 0, 0]);
  });

  test('랜덤 숫자가 FORWARD_NUM 이상일 때 전진 횟수 증가', () => {
    // given
    const car = new Car(['pobi']);
    const randomNumber = FORWARD_NUM;
    const carIndex = 0; // 'pobi'의 배열 인덱스

    // when
    car.validateForward(randomNumber, carIndex);

    // then
    expect(car.forwardCounts[carIndex]).toBe(1);
  });

  test('랜덤 숫자가 FORWARD_NUM 미만일 때 전진 횟수 유지', () => {
    // given
    const car = new Car(['pobi']);
    const randomNumber = FORWARD_NUM - 1;
    const carIndex = 0; // 'pobi'의 배열 인덱스

    // when
    car.validateForward(randomNumber, carIndex);

    // then
    expect(car.forwardCounts[carIndex]).toBe(0);
  });

  test('최대 전진 횟수를 가진 동점 우승자 배열 반환', () => {
    // given
    const car = new Car(['pobi', 'woni']);
    car.forwardCounts = [3, 3];

    // when
    const winnerList = car.getWinnerList();

    // then
    expect(winnerList).toEqual(['pobi', 'woni']);
  });
});