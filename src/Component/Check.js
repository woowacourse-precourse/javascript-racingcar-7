class Check {
  async checkCarNames(car_names_arr) {
    const str_len_check = car_names_arr.some(
      (str) => str.length <= 0 || str.length >= 6
    );

    // 자동차 이름 길이가 1~5 사이인지 검사
    if (str_len_check)
      throw new Error("[ERROR] 자동차 이름을 1~5자 사이로 입력해야 합니다.");
  }

  async checkAttemptNumber(attempt_number) {
    const reg = /^[0-9\s]*$/;

    // 1 이상의 값을 입력했는지 검사
    if (attempt_number <= 0)
      throw new Error("[ERROR] 1 이상의 값을 입력해야 합니다.");

    // 입력한 데이터가 숫자인지 아닌지 검사
    if (!reg.test(attempt_number))
      throw new Error("[ERROR] 숫자만 입력이 가능합니다.");
  }
}

export default Check;
