export const validateRaceNumber = (raceNum) => {
  const numValue = Number(raceNum);

  if (Number.isNaN(numValue)) {
    throw new Error('[ERROR] 숫자를 입력해주세요.');
  }

  if (numValue < 0) {
    throw new Error('[ERROR] 시도할 횟수는 양수만 입력 가능해요.');
  }

  if (numValue === 0) {
    throw new Error(
      '[ERROR] 0 또는 공백은 입력할 수 없어요. 유효한 숫자를 입력해주세요.'
    );
  }
};
