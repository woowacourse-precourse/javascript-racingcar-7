class Car {
    #name;
    #position;

    constructor(name) {
        this.#validateName(name);
        this.#name = name;
        this.#position = 0;
    }

    #validateName(name) {
        if (!name || name.length > 5) {
            throw new Error('[ERROR] 자동차 이름은 5자 이하여야 합니다.');
        }
    }

    move(number) {
        if (number >= 4) {
            this.#position += 1;
        }
    }

    getName() {
        return this.#name;
    }

    getPosition() {
        return this.#position;
    }
}

export default Car;