class Car {

  constructor(name) {
    this.name = name;
    this.distance = 0;     
  }

  move(distance) {
    this.distance += distance;
  }

}

export default Car;