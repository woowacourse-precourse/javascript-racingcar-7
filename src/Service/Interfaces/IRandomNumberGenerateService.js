import { ERROR_MESSAGES } from '../../constants';

class IRandomNumberGenerateService {
  generate() {
    throw new Error('decideMoveForward' + ERROR_MESSAGES.MUST_OVERRIDE_METHOD);
  }
}

export default IRandomNumberGenerateService;
