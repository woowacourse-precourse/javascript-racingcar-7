//무작위 값을 구하는 함수 작성하기
import { Random } from "@woowacourse/mission-utils";

export const getRandomNumber = () => {
  return Random.pickNumberInRange(0, 9); // 0-9 사이의 숫자 반환
};

export const shouldMoveForward = () => {
  return getRandomNumber() >= 4; // 4이상이면 true 반환
};
