class Car {
    constructor(name) {
        this._name = name;
        this._mileage = 0;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get _mileage() {
        return this._mileage;
    }

    move() {
        ++this._mileage;
    }
  }
  
  export default Car;