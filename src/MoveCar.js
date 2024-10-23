import CarList from './carList/CarList.js';

class MoveCar {
  constructor() {
    this.carlist = new CarList();
  }

  getCarObj(carNameList) {
    return this.carlist.createCarObj(carNameList);
  }

  moveDistance(carNameList, gameCount) {
    const carObj = this.getCarObj(carNameList);
  }
}
export default MoveCar;
