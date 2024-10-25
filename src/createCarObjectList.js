const createCarObjectList = (carNameList) => {
  return carNameList.map((carName) => {
    return {
      name: carName,
      numberOfRun: 0,
    };
  })
}

export default createCarObjectList;