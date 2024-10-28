// @ts-check
import Module from '../lib/Module.js';

import { RacingController } from './racing.controller.js';
import { RacingModel } from './racing.model.js';
import { RacingView } from './racing.view.js';

const RacingModule = new Module({
  models: [RacingModel],
  views: [RacingView],
  controllers: [RacingController],
});

export default RacingModule;
