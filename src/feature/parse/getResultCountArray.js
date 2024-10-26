function getResultCountArray(carList, raceProgress) {
  const BAR_TO_NUMBER_LIST = carList.map((car) => {
    const RACE_BAR = raceProgress.get(car);
    const RACE_LENGTH = RACE_BAR.length;
    return ([car, RACE_LENGTH]);
  });

  return BAR_TO_NUMBER_LIST;
}

export default getResultCountArray;