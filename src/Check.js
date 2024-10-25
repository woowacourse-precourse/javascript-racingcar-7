class Check {
  async checkCarNames(car_names_arr) {
    const str_len_check = car_names_arr.some(
      (str) => str.length >= 1 && str.length <= 5
    );

    // 자동차 이름 길이가 1~5 사이이면 true
    return str_len_check;
  }

  async checkAttemptNumber(attempt_number) {
    const reg = /^[0-9\s]*$/;

    // 1 이상의 값을 입력했는지 검사
    if (attempt_number <= 0) return false;

    // 입력한 데이터가 숫자인지 아닌지 검사
    if (!reg.test(attempt_number)) return false;

    return true;
  }
}

export default Check;
