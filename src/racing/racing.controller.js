// @ts-check

import { RacingModel } from './racing.model.js';
import { RacingView } from './racing.view.js';

export class RacingController {
  /** @type {RacingModel} */
  #racingModel;

  /** @type {RacingView} */
  #racingView;

  /**
   *
   * @param {{ models: { RacingModel: RacingModel }; views: { RacingView: RacingView } }} param
   */
  constructor({ models, views }) {
    const { RacingModel: racingModel } = models;
    const { RacingView: racingView } = views;

    this.#racingModel = racingModel;
    this.#racingView = racingView;

    this.#input();
  }

  async #input() {
    this.#racingModel.setCars(await this.#racingView.getCarNames());
    this.#racingModel.setTrialNumber(await this.#racingView.getTrialNumber());
  }
}
