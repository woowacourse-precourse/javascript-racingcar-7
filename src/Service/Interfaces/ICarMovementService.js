class ICarMovementService {
  generateRandomNumber() {
    throw new Error(
      'generateRandomNumber() 메서드는 반드시 오버라이딩 되어야 합니다.'
    );
  }

  decideMoveForward() {
    throw new Error(
      'decideMoveForward() 메서드는 반드시 오버라이딩 되어야 합니다.'
    );
  }

  moveCars(cars) {
    throw new Error('moveCars() 메서드는 반드시 오버라이딩 되어야 합니다.');
  }
}

export default ICarMovementService;
