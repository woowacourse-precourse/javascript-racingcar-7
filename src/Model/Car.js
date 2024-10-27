class Car {
  #name;
  #forwardCount;
  #records;

  constructor(name) {
    this.#name = name;
    this.#forwardCount = 0;
    this.#records = [];
  }

  moveForward() {
    this.#forwardCount += 1;
  }

  saveForwardStatus() {
    this.#records.push(this.#forwardCount);
  }

  getForwardCount() {
    return this.#forwardCount;
  }

  getName() {
    return this.#name;
  }

  getRecords() {
    return this.#records;
  }
}

export default Car;
