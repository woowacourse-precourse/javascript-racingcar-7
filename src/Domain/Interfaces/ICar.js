import { ERROR_MESSAGES } from '../../constants';

class ICar {
  constructor() {
    if (new.target === ICar) {
      throw new Error(
        'CarInterface' + ERROR_MESSAGES.CANNOT_INSTANTIATE_ABSTRACT_CLASS
      );
    }
  }

  moveForward() {
    throw new Error('moveForward' + ERROR_MESSAGES.MUST_OVERRIDE_METHOD);
  }

  saveForwardStatus() {
    throw new Error('saveForwardStatus' + ERROR_MESSAGES.MUST_OVERRIDE_METHOD);
  }

  getForwardCount() {
    throw new Error('getForwardCount' + ERROR_MESSAGES.MUST_OVERRIDE_METHOD);
  }

  getName() {
    throw new Error('getName' + ERROR_MESSAGES.MUST_OVERRIDE_METHOD);
  }

  getRecords() {
    throw new Error('getRecords' + ERROR_MESSAGES.MUST_OVERRIDE_METHOD);
  }
}

export default ICar;
