const getCarNameList = (carNameInputString) => {
  if (carNameString) {
    const carNameList = carNameInputString.split(',');

    return carNameList;
  }
}

export default getCarNameList;