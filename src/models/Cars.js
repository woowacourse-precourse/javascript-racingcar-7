import RacingCarError from "../errors/RacingCarError.js";
import { ERROR_MESSAGE } from "../constants/errorMessages.js";

class Cars {

    static SEPARATOR = ',';

    static EXCEEDS_MAX_LENGTH = 5;

    #cars;

    constructor(cars) {
        this.#cars = cars;
        this.validate();
    }

    static getRacingCarNames(inputRacingCar) {
        const cars = inputRacingCar.split(Cars.SEPARATOR);
        const carsInstantce = new Cars(cars);
        return carsInstantce.#cars;
    }

    validate() {
        this.validateDuplicateCarNames();
        this.validateNameContainsWhitespace();
        this.validateNameExceedsMaxLength();
        this.validateMinimumCarCount();
    }

    // 자동차 이름이 중복되는 경우
    validateDuplicateCarNames() {
        const DUPLICATE_CAR_NAMES_FLAG = new Set(this.#cars).size !== this.#cars.length;
        if(DUPLICATE_CAR_NAMES_FLAG) {
            throw new RacingCarError(ERROR_MESSAGE.input_duplicate_car_name);
        }
    }

    // 자동차 이름에 공백이 포함된 경우
    validateNameContainsWhitespace() {
        const HAS_WHITE_SPACE_FLAG = this.#cars.some(name => /\s/.test(name))
        if(HAS_WHITE_SPACE_FLAG) {
            throw new RacingCarError(ERROR_MESSAGE.input_name_contains_whitespace);
        }
    }

    // 자동차 이름이 5자를 초과하는 경우
    validateNameExceedsMaxLength() {
        const EXCEEDING_MAX_LENGTH_FLAG = this.#cars.some(name => name.trim().length > Cars.EXCEEDS_MAX_LENGTH);
        if(EXCEEDING_MAX_LENGTH_FLAG) {
            throw new RacingCarError(ERROR_MESSAGE.input_name_exceeds_max_length);
        }
    }

    // 자동차가 최소 2대 이상인지 확인
    validateMinimumCarCount() {
        if(this.#cars.length <= 1) {
            throw new RacingCarError(ERROR_MESSAGE.input_minimum_car_count);
        }
    }

}

export default Cars;