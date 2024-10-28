const parseCarString = (inputs) => {
  if (inputs.length === 0)
    throw new Error('[ERROR] 하나 이상의 자동차를 입력하세요');
  const parsedInput = inputs.split(/,/g);
  for (let i = 0; i < parsedInput.length; i += 1) {
    if (parsedInput[i] === '') {
      throw new Error('[ERROR] 자동차의 이름은 빈 문자열일 수 없습니다');
    }
  }
  return parsedInput;
};

export default parseCarString;
