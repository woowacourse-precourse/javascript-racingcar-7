import { getWinner } from '../src/winner.js';

describe('getWinner', () => {
  const carList = ['car1', 'car2', 'car3'];

  test('우승자가 한 명일 경우 한 명의 우승자를 반환합니다.', () => {
    const racingStatus = [3, 2, 1];
    
    expect(getWinner(carList, racingStatus)).toEqual(['car1']);
  });

  test('우승자가 두 명 이상일 경우 모든 우승자를 반환합니다.', () => {
    const racingStatus = [3, 3, 3];
    
    expect(getWinner(carList, racingStatus)).toEqual(['car1', 'car2', 'car3']);
  });
});