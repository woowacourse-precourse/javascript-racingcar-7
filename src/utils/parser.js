const parseCarName = (carNamesString) => {
  return carNamesString.split(',').map(carName=>carName.trim());
}

const parseIteration = (iterationNumberString) => {
  if(isNaN(iterationNumberString))
    throw new Error('[ERROR] 숫자가 아니에요! 숫자를 입력해주세요!');
  if (parseInt(iterationNumberString,10) !== Number(iterationNumberString)){
    throw new Error('[ERROR] 정수로 입력해주세요!:)');
  }
  return parseInt(iterationNumberString, 10);
}

const parser = {
  parseCarName,
  parseIteration,
};

export default parser;