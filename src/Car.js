class Car {
  constructor(name) {
    if (name.length > 5 || name.length === 0)
      throw new Error('[ERROR] 잘못 입력하였습니다.');
    this.name = name;
    this.forwardCount = 0;
  }

  forward() {
    this.forwardCount++;
  }
}

export default Car;
