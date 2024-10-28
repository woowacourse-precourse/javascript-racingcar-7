class Car {
  
  #name;
  #distance;

  constructor(name) {
    this.#name = name;
    this.#distance = 0;     
  }

  move(distance) {
    this.#distance += distance;
  }

  getDistance() {
    return this.#distance; 
  }

  getName() {
    return this.#name; 
  }
}

export default Car;