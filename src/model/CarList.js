class CarList {
  createCarList(carNameList) {
    const carList = carNameList.map((name) => ({
      name,
      distance: '',
      ranking: 0,
    }));

    return carList;
  }
}

export default CarList;
