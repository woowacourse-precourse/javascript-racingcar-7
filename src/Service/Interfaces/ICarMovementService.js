import { ERROR_MESSAGES } from '../../constants';

class ICarMovementService {
  constructor() {
    if (new.target === ICarMovementService) {
      throw new Error(
        'ICarMovementService' + ERROR_MESSAGES.CANNOT_INSTANTIATE_ABSTRACT_CLASS
      );
    }
  }

  decideMoveForward() {
    throw new Error('decideMoveForward' + ERROR_MESSAGES.MUST_OVERRIDE_METHOD);
  }

  moveCars(cars) {
    throw new Error('moveCars' + ERROR_MESSAGES.MUST_OVERRIDE_METHOD);
  }
}

export default ICarMovementService;
