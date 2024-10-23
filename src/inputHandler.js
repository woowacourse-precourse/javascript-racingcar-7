const parseCarString = (inputs) => {
  if (inputs.length === 0)
    throw new Error('[ERROR] 하나 이상의 자동차를 입력하세요');
  return inputs.split(/,/g);
};

export default parseCarString;
