import { Random } from '@woowacourse/mission-utils';
import { print } from './IoHandller.js';

const isRandomMove = () => {
  const randNum = Random.pickNumberInRange(0, 9);
  if (randNum >= 4) return true;
  return false;
};

const moveCarEvent = (carCountList) => {
  const movedCarList = carCountList.map((car) => {
    if (isRandomMove()) {
      return [car[0], car[1] + 1];
    }
    return car;
  });
  return movedCarList;
};

const makeOutput = (carData) => {
  let output = '';
  carData.forEach((car) => {
    output += `${car[0]} : ${'-'.repeat(car[1])}`;
    output += '\n';
  });
  return output;
};

const getWinner = (carData) => {
  const winner = [carData[0]]; // 첫 번째 차를 초기 우승자로 설정
  carData.forEach((car) => {
    if (car[1] > winner[0][1]) {
      winner.length = 0; // 새로운 우승자가 있으면 기존 우승자 목록을 비움
      winner.push(car);
    } else if (car[1] === winner[0][1]) {
      winner.push(car); // 동일한 거리를 달린 경우 추가
    }
  });
  return winner;
};
const formatWinners = (winners) => {
  const winnerString = winners.map((win) => win[0]).join(' ');
  const output = `최종 우승자 : ${winnerString}`;
  return output;
}; // 우승자 이름들을 공백으로 구분하여 출력
const setRank = (carData) => {
  const winners = getWinner(carData);
  return formatWinners(winners);
};

export const initGame = ({ car, count }) => {
  let carCountList = car.map((carName) => [carName, 0]);
  for (let idx = 0; idx < count; idx++) {
    carCountList = moveCarEvent(carCountList);
    print(makeOutput(carCountList));
  }
  print(setRank(carCountList));
};
