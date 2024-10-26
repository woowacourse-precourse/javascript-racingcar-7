export const ERR_MESSAGE = "[ERROR]";

export const ERR_LENGTH = () => {
  throw new Error(ERR_MESSAGE + " 자동차 이름은 1~5자 사이로 입력해야 합니다.");
};

export const ERR_POSITIVE = () => {
  throw new Error(ERR_MESSAGE + " 1 이상의 숫자를 입력해야 합니다.");
};

export const ERR_ISNUMBER = () => {
  throw new Error(ERR_MESSAGE + " 숫자만 입력이 가능합니다.");
};
