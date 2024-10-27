export default {
  validateNames(names) {
    if (!names) throw new Error('[ERROR] 이름을 입력해주세요.');
    if (!names.match(/^[^,]{1,5}(,[^,]{1,5})+$/)) {
      this.OneName(names);
      this.LongName(names);
      throw new Error('[ERROR] 이름 입력을 다시 확인해주세요.');
    }
  },
  OneName(names) {
    if (names.match(/^[^,]{1,5}$/)) {
      throw new Error('[ERROR] 하나 이상의 이름을 입력해주세요.');
    }
  },
  LongName(names) {
    if (names.match(/^[^,]+(,[^,]+)*$/)) {
      throw new Error('[ERROR] 이름의 길이는 5를 초과할 수 없습니다.');
    }
  },

  validateRepetitionString(repetitionString) {
    if (!repetitionString) throw new Error('[ERROR] 시도 횟수를 입력해주세요.');
    if (!repetitionString.match(/^\d+$/)) {
      // 어떤 유형의 에러인지 구분하여 작성 <- 사용자를 위함
      // 맨 마지막에는 일반적인 에러 메시지로 작성
      throw new Error('[ERROR] 시도 횟수를 입력해주세요.');
    }
  },
};
