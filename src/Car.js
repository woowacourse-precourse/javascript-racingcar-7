class Car {
  constructor(name) {
    this._name = name;
    this._mileage = 0;
  }

  get name() {
    return this._name;
  }

  get mileage() {
    return this._mileage;
  }

  move() {
    ++this._mileage;
  }
}

export default Car;
