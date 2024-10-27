import {
  ERR_LENGTH,
  ERR_COR_NAME,
  ERR_POSITIVE,
  ERR_ISDUP,
  ERR_ISINT,
} from "./Error.js";

function isDuplicate(arr) {
  const isDup = arr.some(function (x) {
    return arr.indexOf(x) !== arr.lastIndexOf(x);
  });

  return isDup;
}

export const checkCarNames = (car_names_arr) => {
  // 자동차 이름 길이가 1~5 사이인지 검사
  const str_len_check = car_names_arr.some(
    (str) => str.length <= 0 || str.length >= 6
  );

  // 입력한 값이 한글, 영어, 숫자, 특수문자(.^*#!;)만 있는지 검사
  const reg = /^[ㄱ-ㅎ가-힣a-zA-Z0-9.^*#!;]+$/;
  const str_reg_check = car_names_arr.every((str) => reg.test(str));

  // 자동차 이름에 중복이 있는지 검사
  const car_name_dup = isDuplicate(car_names_arr);

  if (str_len_check) throw new Error(ERR_LENGTH());
  if (!str_reg_check) throw new Error(ERR_COR_NAME());
  if (car_name_dup) throw new Error(ERR_ISDUP());
};

export const checkAttemptNumber = (attempt_number) => {
  // 입력한 값이 숫자인지 검사
  const reg = /^[0-9\s]*$/;

  if (attempt_number <= 0) throw new Error(ERR_POSITIVE());
  if (!reg.test(attempt_number)) throw new Error(ERR_ISINT());
};
