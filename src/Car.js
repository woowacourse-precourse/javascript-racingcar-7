import { Random } from "@woowacourse/mission-utils";

class Car {
    name;
    go = '';

    constructor(name) {
        this.name = name;
    }

    tryToGo() {
        if(Random.pickNumberInRange(0, 9) >= 4) {
            this.go += '-';
        }

        return this.go;
    }

    getNumOfGo() {
        return this.go.length;
    }
}

export default Car;