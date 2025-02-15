function checkTrialCount(trialCount) {
  if (Number.isNaN(trialCount)) {
    const INPUT_IS_NaN = '입력하신 값이 숫자가 아닙니다.'
    const ERROR = new Error(INPUT_IS_NaN);
    throw ERROR;
  };

  if (trialCount < 1) {
    const INPUT_IS_TOO_SMALL = '입력하신 값이 1보다 작아서 레이스를 진행 할 수 없습니다.'
    const ERROR = new Error(INPUT_IS_TOO_SMALL);
    throw ERROR;
  };

  if (trialCount !== Math.floor(trialCount) || trialCount !== Math.ceil(trialCount)) {
    const INPUT_IS_DECIMAL = '입력하신 값이 정수가 아닙니다.'
    const ERROR = new Error(INPUT_IS_DECIMAL);
    throw ERROR;
  };
};

export default checkTrialCount;