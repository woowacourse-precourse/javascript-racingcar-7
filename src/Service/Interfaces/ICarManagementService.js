class ICarManagementService {
  constructor() {
    if (new.target === ICarManagementService) {
      throw new Error(
        'CarManagementServiceInterface는 인스턴스화할 수 없는 추상 클래스입니다.'
      );
    }
  }

  addCar(carName) {
    throw new Error('addCar() 메서드는 반드시 오버라이딩 되어야 합니다.');
  }

  getCars() {
    throw new Error('getCars() 메서드는 반드시 오버라이딩 되어야 합니다.');
  }
}

export default ICarManagementService;
