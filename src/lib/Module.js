// @ts-check
/**
 * @typedef {new (...args: any[]) => any} ClassConstructor
 */

class Module {
  /** @type {Array<ClassConstructor>} */
  #Models;

  /** @type {Array<ClassConstructor>} */
  #Views;

  /** @type {Array<ClassConstructor>} */
  #Controllers;

  /**
   *
   * @param {Array<ClassConstructor>} Objects
   * @returns {Record<string, object>}
   */
  static generate(Objects) {
    const instantiatedObjects = {};

    Objects.forEach((Object) => {
      instantiatedObjects[Object.name] = new Object();
    });

    return instantiatedObjects;
  }

  /**
   *
   * @param {{ models: Array<ClassConstructor>, views: Array<ClassConstructor>, controllers: Array<ClassConstructor> }} dependencies
   */
  constructor({ models, views, controllers }) {
    this.#Models = models;
    this.#Views = views;
    this.#Controllers = controllers;
  }

  init() {
    const instantiatedModels = Module.generate(this.#Models);
    const instantiatedViews = Module.generate(this.#Views);

    this.#Controllers.forEach((Controller) => {
      // eslint-disable-next-line no-new
      new Controller({
        models: instantiatedModels,
        views: instantiatedViews,
      });
    });
  }
}

export default Module;
