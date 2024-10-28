import { MissionUtils } from '@woowacourse/mission-utils';
import { RANDOM_NUMBER_END, RANDOM_NUMBER_START } from '../constants';
import IRandomNumberGenerateService from './Interfaces/IRandomNumberGenerateService';

class RandomNumberGenerateService extends IRandomNumberGenerateService {
  generate() {
    return MissionUtils.Random.pickNumberInRange(
      RANDOM_NUMBER_START,
      RANDOM_NUMBER_END
    );
  }
}

export default RandomNumberGenerateService;
