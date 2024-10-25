const parseStringToArray = (inputString, delimiter = ',') => {
  return inputString.split(delimiter).map((item) => item.trim());
}

export default parseStringToArray;
