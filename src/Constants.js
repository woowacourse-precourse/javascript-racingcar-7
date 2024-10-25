export const INPUT_PROMPTS = {
  carNames: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  tryCount: "시도할 횟수는 몇 회인가요?\n",
};

export const ERROR_MESSAGES = {
  invalidCarName:
    "[ERROR] 자동차 이름은 1자 이상 5자 이하까지 작명 가능합니다.",
  insufficientCars:
    "[ERROR] 경기를 위해서 최소 2대 이상의 자동차가 필요합니다.",
  invalidTryCount: "[ERROR] 시도 횟수는 자연수만 입력 가능합니다.",
  noMovementError:
    "[ERROR] 모든 자동차가 시작지점에 있으므로 우승자는 없습니다.",
  duplicateCarName: "[ERROR] 중복된 자동차 이름이 있습니다.",
};
