/* eslint-disable max-classes-per-file */
import Module from '../lib/Module.js';

describe('Module', () => {
  let module;

  beforeEach(() => {
    class Model {
      #data = 'data';

      getData() {
        return this.#data;
      }
    }

    class Model2 {
      #data = 'data2';

      getData() {
        return this.#data;
      }
    }

    class View {
      output(value) {
        return value;
      }
    }

    class Controller {
      #model;

      #model2;

      #view;

      constructor({ models, views }) {
        const { Model: testModels, Model2: testModels2 } = models;
        const { View: testViews } = views;

        this.#model = testModels;
        this.#model2 = testModels2;
        this.#view = testViews;

        this.run();
      }

      run() {
        // eslint-disable-next-line no-console
        console.log(this.#view.output(this.#model.getData() + this.#model2.getData()));
      }
    }

    module = new Module({
      models: [Model, Model2],
      views: [View],
      controllers: [Controller],
    });
  });

  describe('generate', () => {
    it('객체의 이름을 키, 객체를 값으로 가지는 새로운 인스턴스 객체를 반환해야한다.', () => {
      class Test {
        #text = 'generated';

        test() {
          return this.#text;
        }
      }

      const instantiatedObject = Module.generate([Test]);

      expect(instantiatedObject.Test).toBeInstanceOf(Test);
    });
  });

  describe('init', () => {
    it('init 실행 시 controller가 실행되어야 한다', () => {
      const consoleSpy = jest.spyOn(console, 'log');

      module.init();

      expect(consoleSpy).toHaveBeenCalledWith('datadata2');
    });
  });
});
