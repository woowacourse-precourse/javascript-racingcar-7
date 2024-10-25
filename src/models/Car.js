class Car {
    constructor(name) {
        this.name = name;
        this.moved = 0;
    }

    move() {
        this.moved += 1;
    }

    getMoved() {
        return this.moved;
    }

    getName() {
        return this.name
    }
}

export default Car;