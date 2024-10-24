export const carsInfoController = (carNames) => {
  const carsInfo = carNames.reduce((acc, carName) => {
    acc[carName] = 0;
    return acc;
  }, {});

  const getCarsInfoEntries = () => Object.entries(carsInfo);

  const getAdvanceCounts = () => Object.values(carsInfo);

  const incrementAdvanceCount = (carName) => {
    carsInfo[carName]++;
  };

  return { getCarsInfoEntries, getAdvanceCounts, incrementAdvanceCount };
};
