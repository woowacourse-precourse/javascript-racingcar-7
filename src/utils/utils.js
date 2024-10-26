const utils = {
  validateEmpty(input) {
    if (input.length === 0) {
      throw new Error('[ERROR] 빈 문자열입니다.');
    }
  },
};

export default utils;
