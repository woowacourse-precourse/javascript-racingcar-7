class Car {
  constructor(name) {
    this.name = name;
    this.forwardCount = 0;
  }
  
  forward() {
    this.forwardCount++;
  }
}

export default Car;
