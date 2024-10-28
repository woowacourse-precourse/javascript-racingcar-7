const parseCarName = (carNamesString) => {
  return carNamesString.split(',').map(carName=>carName.trim());
}

const parseIteration = (iterationNumberString) => {
  return parseInt(iterationNumberString, 10);
}

const parser = {
  parseCarName,
  parseIteration,
};

export default parser;