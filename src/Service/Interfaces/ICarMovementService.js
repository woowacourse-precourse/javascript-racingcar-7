class ICarMovementService {
  constructor() {
    if (new.target === ICarMovementService) {
      throw new Error(
        'ICarMovementService는 인스턴스화할 수 없는 추상 클래스입니다.'
      );
    }
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
