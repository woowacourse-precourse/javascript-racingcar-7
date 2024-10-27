import { Random } from "@woowacourse/mission-utils";
import { GAME_RULES } from "../constants/index.js";

// 전진 조건 체크
export const shouldAdvance = (randomNumber) => {
  return randomNumber >= GAME_RULES.ADVANCE_NUMBER;
};

// 자동차 전진 로직(전진 카운트 증가)
export const advanceCars = (carNames, incrementAdvanceCount) => {
  const { MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER } = GAME_RULES;
  carNames.forEach((carName) => {
    const randomNumber = Random.pickNumberInRange(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);

    if (shouldAdvance(randomNumber)) {
      incrementAdvanceCount(carName);
    }
  });
};

// 각 자동차의 전진 카운트를 대시로 변환해서 결과 리턴
export const getAdvanceResult = (carsInfoEntries) => {
  const result = carsInfoEntries
    .map(([carName, advanceCount]) => {
      const dash = GAME_RULES.DASH.repeat(advanceCount);
      return `${carName} : ${dash}`;
    })
    .join("\n");

  return result;
};

/**
 * 반복 횟수 만큼 실행 리스트에 있는 함수들을 실행합니다.
 * @param {number} repeatCount - 반복 횟수
 * @param {Array<() => void>} executionList - 실행할 함수들의 배열
 */
export const executionLoop = (repeatCount, executionList) => {
  for (let i = 0; i < repeatCount; i++) {
    executionList.forEach((executionFn) => executionFn());
  }
};
