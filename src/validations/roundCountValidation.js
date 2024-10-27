export const roundCountValidation = (roundCount) => {
  checkEmptyRoundCount(roundCount);
  checkNumberRoundCount(roundCount);
};

const checkEmptyRoundCount = (roundCount) => {
  if (roundCount.trim() === "") {
    throw new Error("[ERROR] 시도 횟수는 빈 값이 될 수 없습니다.");
  }
};

const checkNumberRoundCount = (roundCount) => {
  const number = Number(roundCount);
  if (!Number.isSafeInteger(number) || number < 1) {
    throw new Error("[ERROR] 시도 횟수는 1 이상의 정수여야 합니다.");
  }
};
