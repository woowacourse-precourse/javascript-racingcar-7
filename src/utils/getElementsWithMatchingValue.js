const getElementsWithMatchingValue = (targetArray, comparisonArray, value) => {
  return targetArray.filter((_, index) => comparisonArray[index] === value);
}

export default getElementsWithMatchingValue;