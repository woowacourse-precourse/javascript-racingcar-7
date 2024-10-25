const createCarObjectList = (carNameList) => {
  return carNameList.map((carName) => {
    return {
      name: carName,
      runCount: 0,
    };
  })
}

export default createCarObjectList;