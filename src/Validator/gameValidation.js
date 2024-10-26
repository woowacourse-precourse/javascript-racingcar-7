const IS_MAX_COUNT_GAME = (gameCount) => gameCount > 50;
const IS_NUMBER = (gameCount) => !/^[0-9]+$/.test(gameCount);
const IS_MIN_COUNT_GAME = (gameCount) => gameCount <= 0;
export const GAME_VALIDATION = (inputGameCount) => {
  const gameCount = Number(inputGameCount);
  if (IS_NUMBER(gameCount)) {
    throw new Error('[ERROR] 게임 횟수는 숫자만 입력할 수 있습니다.');
  }
  if (IS_MIN_COUNT_GAME(gameCount)) {
    throw new Error('[ERROR] 1번 이상의 게임 횟수를 입력해주세요.');
  }

  if (IS_MAX_COUNT_GAME(gameCount)) {
    throw new Error('[ERROR] 50번 이하의 게임 횟수를 입력해주세요.');
  }
};
