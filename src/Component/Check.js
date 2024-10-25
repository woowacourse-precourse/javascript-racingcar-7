import { ERR_LENGTH, ERR_POSITIVE, ERR_ISNUMBER } from "./Error.js";

export const checkCarNames = (car_names_arr) => {
  const str_len_check = car_names_arr.some(
    (str) => str.length <= 0 || str.length >= 6
  );

  // 자동차 이름 길이가 1~5 사이인지 검사
  if (str_len_check) ERR_LENGTH();
};

export const checkAttemptNumber = (attempt_number) => {
  const reg = /^[0-9\s]*$/;

  // 1 이상의 값을 입력했는지 검사
  if (attempt_number <= 0) ERR_POSITIVE();

  // 입력한 데이터가 숫자인지 아닌지 검사
  if (!reg.test(attempt_number)) ERR_ISNUMBER();
};
