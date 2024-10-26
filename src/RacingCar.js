class RacingCar {
    constructor(name){
        this._name = name;
        this._distance = 0;
    }
    get distance() {
        return this.distance;
    }
    get name() {
        return this.name;
    }
    moveForward() {
        this.distance += 1;
    }
}

export default RacingCar;