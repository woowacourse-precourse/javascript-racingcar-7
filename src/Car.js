class Car {
    #name;
    #position;

    constructor(name) {
        this.#name = name;
        this.#position = 0;
    }

    moveForward() {
        this.#position += 1;
    }

    printPosition() {
        return `${this.#name} : ${"-".repeat(this.#position)}`;
    }
}
