class Car {

  constructor(name) {
    this.name = name;
    this.distance = 0;     
  }

  move(distance) {
    this.distance += distance;
  }

  getDistance() {
    return this.distance; 
  }

}

export default Car;