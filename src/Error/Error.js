const ERR_MESSAGE = "[ERROR]";

export const ERR_LENGTH = () => {
  return ERR_MESSAGE + " 자동차 이름은 1~5자 사이로 입력해야 합니다.";
};

export const ERR_COR_NAME = () => {
  return (
    ERR_MESSAGE + " 한글, 영어, 숫자, 특수문자(.^*#!;)만 입력이 가능합니다."
  );
};

export const ERR_ISDUP = () => {
  return ERR_MESSAGE + " 자동차 이름은 각각 달라야 합니다.";
};

export const ERR_TWO_CAR = () => {
  return ERR_MESSAGE + " 자동차 이름은 2개 이상이여야 합니다.";
};

export const ERR_POSITIVE = () => {
  return ERR_MESSAGE + " 1 이상의 숫자를 입력해야 합니다.";
};

export const ERR_ISINT = () => {
  return ERR_MESSAGE + " 정수만 입력이 가능합니다.";
};
