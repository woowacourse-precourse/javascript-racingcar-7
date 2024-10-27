import { MissionUtils } from '@woowacourse/mission-utils';

const isRandomMove = () => {
  const randNum = MissionUtils.Random.pickNumberInRange(0, 9);
  if (randNum >= 4) return true;
  return false;
};

export const moveCarEvent = (carAndLocationList) => {
  const movedCarList = carAndLocationList.map((car) => {
    if (isRandomMove()) {
      return { name: car.name, location: car.location + 1 };
    }
    return car;
  });
  return movedCarList;
};

export const getWinner = (carData) => {
  const winner = [carData[0]]; // 첫 번째 차를 초기 우승자로 설정
  carData.forEach((car) => {
    if (car.location > winner[0].location) {
      winner.length = 0; // 새로운 우승자가 있으면 기존 우승자 목록을 비움
      winner.push(car);
    } else if (
      car.location === winner[0].location &&
      car.name !== winner[0].name
    ) {
      winner.push(car); // 동일한 거리를 달린 경우 추가
    }
  });
  return winner;
};
