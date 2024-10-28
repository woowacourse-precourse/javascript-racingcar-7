const returnWinners = (carList, numberCount) => {
  const maxValue = Math.max(...numberCount);

  const maxCarNames = numberCount
    .reduce((names, value, index) => {
      if (value === maxValue) names.push(carList[index]);
      return names;
    }, [])
    .join(", ");

  return maxCarNames;
};

export default returnWinners;
