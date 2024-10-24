import checkRuleSet from "./checkRuleSet";

const moveCountValidator = {
  RULE_SET: {
    notNumber: {
      isValid: (input) => !Number.isNaN(parseInt(input, 10)),
      errorMessage: "이동 시도 횟수를 숫자로 입력해주세요.",
    },
    notInteger: {
      isValid: (input) => Number.isInteger(parseFloat(input, 10)),
      errorMessage: "이동 시도 횟수는 양수인 정수만 가능합니다.",
    },
    notPositive: {
      isValid: (input) => parseInt(input, 10) > 0,
      errorMessage: "이동 시도 횟수는 양수인 정수만 가능합니다.",
    },
  },

  checkCount: (input) => {
    checkRuleSet(input, moveCountValidator.RULE_SET);
  },
};

export default moveCountValidator;
