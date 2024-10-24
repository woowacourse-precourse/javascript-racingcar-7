import { Console } from "@woowacourse/mission-utils";

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
        Console.print(`${this.#name} : ${"-".repeat(this.#position)}`);
    }
}
