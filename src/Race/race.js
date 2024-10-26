// 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
//4 이상이면 +1 아니면 +0이걸 n번 반복
// 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
//최대를 비교
import { MissionUtils } from '@woowacourse/mission-utils';

//랜덤값을 게임 횟수만큼 뽑아서 배열에 넣음
export async function getRandomNumbers(gameCount) {
  const RANDOM_RESULT = [];
  for (let i = 0; i < gameCount; i++) {
    const RANDOM_NUMBER = MissionUtils.Random.pickNumberInRange(0, 9);
    RANDOM_RESULT.push(RANDOM_NUMBER);
  }
  return RANDOM_RESULT;
}
//배열에서 4이상의 값의 갯수를 구함
export function countValidAttempt(numbers) {
  const VALID_ATTEMPT = numbers.filter((number) => number >= 4).length;
  return VALID_ATTEMPT;
}

//car position 0에서 numbers만큼 1을 더함
export function changeCarPosition(carPosition, numbers) {
  const VALID_ATTEMPT = countValidAttempt(numbers);
  return carPosition + VALID_ATTEMPT;
}

//
