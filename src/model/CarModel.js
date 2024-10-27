class CarModel {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  advance() {
    this.distance += 1;
  }
}
export default CarModel;
