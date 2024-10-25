export function carCountLimitCheck() {
  if (input.lenght < 5) {
    // 자동차 개수 체크 5이하만 가능
    checkSpace();
  } else {
    throw new error();
  }
}

function checkSpace() {
  // 공백 확인
  if (/\s/.test(input) === false) {
    duplicateCheck();
  } else {
    throw new error();
  }
}

// export {carCountLimitCheck, checkCpace};
