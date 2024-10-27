import Cars from '../src/domain/Cars.js';
import { FORWARD_NUM } from '../src/constants/constants.js';

describe('단위 테스트: Cars 클래스', () => {
  test('차량 이름 및 전진 횟수 배열 초기화한다.', () => {
    // given
    const carNames = ['pobi', 'woni', 'jun'];

    // when
    const cars = new Cars(carNames);

    // then
    expect(cars.carNames).toEqual(carNames);
    expect(cars.forwardCounts).toEqual([0, 0, 0]);
  });

  test('랜덤 숫자가 FORWARD_NUM 이상일 때 전진 횟수 증가한다.', () => {
    // given
    const cars = new Cars(['pobi']);
    const randomNumber = FORWARD_NUM;
    const carIndex = 0; // 'pobi'의 배열 인덱스

    // when
    cars.validateForward(randomNumber, carIndex);

    // then
    expect(cars.forwardCounts[carIndex]).toBe(1);
  });

  test('랜덤 숫자가 FORWARD_NUM 미만일 때 전진 횟수 유지한다.', () => {
    // given
    const cars = new Cars(['pobi']);
    const randomNumber = FORWARD_NUM - 1;
    const carIndex = 0; // 'pobi'의 배열 인덱스

    // when
    cars.validateForward(randomNumber, carIndex);

    // then
    expect(cars.forwardCounts[carIndex]).toBe(0);
  });

  test('최대 전진 횟수를 가진 동점 우승자 배열 반환', () => {
    // given
    const cars = new Cars(['pobi', 'woni']);
    cars.forwardCounts = [3, 3];

    // when
    const winnerList = cars.getWinnerList();

    // then
    expect(winnerList).toEqual(['pobi', 'woni']);
  });
});