const getCarNameList = (carNameInputString) => {
  if (carNameInputString) {
    const carNameList = carNameInputString.split(',');

    return carNameList;
  }
}

export default getCarNameList;