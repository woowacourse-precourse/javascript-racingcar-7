import { Random } from '@woowacourse/mission-utils';
import { RANDOM_RANGE, FORWARD_CRITERIA } from './Car.constant.js';

class Car {
  /** @type {number[]} */
  #road = [];
  #name = '';

  /**
   * @param {string} name
   */
  constructor(name) {
    this.setName(name);
  }

  /**
   * @param {string} name
   * @returns {Car}
   */
  setName(name) {
    this.#name = name;
    return this;
  }

  /**
   * @returns {string}
   */
  getName() {
    return this.#name;
  }

  /**
   * @param {number} round
   * @returns {number}
   */
  getTrack(round) {
    return this.#road[round];
  }

  /**
   * @param {number} track
   * @returns {Car}
   */
  #addTrack(track) {
    this.#road.push(track);
    return this;
  }

  /**
   * @param {number} round
   * @returns {void}
   */
  stop(round) {
    if (!round) {
      this.#addTrack(0);
      return;
    }

    const track = this.getTrack(round - 1);
    this.#addTrack(track);
  }

  /**
   * @param {number} round
   * @returns {void}
   */
  forward(round) {
    if (!round) {
      this.#addTrack(1);
      return;
    }

    const track = this.getTrack(round - 1);
    this.#addTrack(track + 1);
  }

  /**
   * @param {number} round
   * @returns {void}
   */
  drive(round) {
    /** @type {number} */
    const randomNumber = Random.pickNumberInRange(...RANDOM_RANGE);

    if (randomNumber >= FORWARD_CRITERIA) {
      this.forward(round);
      return;
    }

    this.stop(round);
  }
}

export default Car;
