class ICar {
  constructor() {
    if (new.target === ICar) {
      throw new Error('CarInterface는 인스턴스화할 수 없는 추상 클래스입니다.');
    }
  }

  moveForward() {
    throw new Error('moveForward() 메서드는 반드시 오버라이딩 되어야 합니다.');
  }

  saveForwardStatus() {
    throw new Error(
      'saveForwardStatus() 메서드는 반드시 오버라이딩 되어야 합니다.'
    );
  }

  getForwardCount() {
    throw new Error(
      'getForwardCount() 메서드는 반드시 오버라이딩 되어야 합니다.'
    );
  }

  getName() {
    throw new Error('getName() 메서드는 반드시 오버라이딩 되어야 합니다.');
  }

  getRecords() {
    throw new Error('getRecords() 메서드는 반드시 오버라이딩 되어야 합니다.');
  }
}

export default ICar;
