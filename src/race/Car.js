export default class Car {
    constructor(name) {
        this.name = name;
        this.moveForwardCount = 0;
    }

    moveForward() {
        this.moveForwardCount += 1;
    }
}