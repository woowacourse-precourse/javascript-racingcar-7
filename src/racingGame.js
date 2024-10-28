import { Random } from "@woowacourse/mission-utils";

// 자동차 객체 생성
export const createCar = (name) => ({
  name,
  position: 0,
});

// 랜덤값이 4 이상일 경우 전진
export const moveForward = (car) => {
  const shouldMove = Random.pickNumberInRange(0, 9) >= 4;
  if (shouldMove) {
    return {
      ...car,
      position: car.position + 1,
    };
  }
  return car;
};

// 현재 위치 출력
export const getCurrentPosition = (car) => {
  return `${car.name} : ${"-".repeat(car.position)}`;
};

// 최종 우승자 찾기
export const findWinners = (cars) => {
  const maxPosition = Math.max(...cars.map(car => car.position));
  return cars.filter(car => car.position === maxPosition)
    .map(car => car.name)
}

// 최종 우승자 출력
export const formatWinners = (winners) => {
  return `최종 우승자 : ${winners.join(', ')}`;
}
