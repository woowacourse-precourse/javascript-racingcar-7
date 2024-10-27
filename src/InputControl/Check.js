import {
  ERR_LENGTH,
  ERR_COR_NAME,
  ERR_ISDUP,
  ERR_TWO_CAR,
  ERR_POSITIVE,
  ERR_ISINT,
} from "../Error/Error.js";

// 자동차 이름에 중복이 있는지 검사
function isDuplicate(arr) {
  const isDup = arr.some(function (x) {
    return arr.indexOf(x) !== arr.lastIndexOf(x);
  });

  return isDup;
}

// 자동차 이름 길이가 1~5 사이인지 검사
export const carLenCheck = (arr) => {
  return arr.some((str) => str.length <= 0 || str.length >= 6);
};

// 입력한 값이 한글, 영어, 숫자, 특수문자(.^*#!;)만 있는지 검사
export const carNameCheck = (arr) => {
  const reg = /^[ㄱ-ㅎ가-힣a-zA-Z0-9.^*#!;]+$/;
  return arr.every((str) => reg.test(str));
};

export const checkCarNames = (car_names_arr) => {
  const str_len_check = carLenCheck(car_names_arr);
  const str_reg_check = carNameCheck(car_names_arr);
  const car_name_dup = isDuplicate(car_names_arr);

  if (str_len_check) throw new Error(ERR_LENGTH());
  if (!str_reg_check) throw new Error(ERR_COR_NAME());
  if (car_name_dup) throw new Error(ERR_ISDUP());
  if (car_names_arr.length <= 1) throw new Error(ERR_TWO_CAR());
};

export const checkAttemptNumber = (attempt_number) => {
  if (attempt_number <= 0) throw new Error(ERR_POSITIVE());
  if (!/^[0-9\s]*$/.test(attempt_number)) throw new Error(ERR_ISINT());
};
