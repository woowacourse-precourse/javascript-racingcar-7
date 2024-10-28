import { ERROR_MESSAGES } from '../../constants';

class ICarManagementService {
  constructor() {
    if (new.target === ICarManagementService) {
      throw new Error(
        'ICarManagementService' +
          ERROR_MESSAGES.CANNOT_INSTANTIATE_ABSTRACT_CLASS
      );
    }
  }

  addCar(carName) {
    throw new Error('addCar' + ERROR_MESSAGES.MUST_OVERRIDE_METHOD);
  }

  getCars() {
    throw new Error('getCars' + ERROR_MESSAGES.MUST_OVERRIDE_METHOD);
  }
}

export default ICarManagementService;
