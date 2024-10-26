class RacingCar {
    constructor(name){
        this._name = name;
        this._distance = 0;
    }
    get distance() {
        return this._distance;
    }
    get name() {
        return this._name;
    }
    moveForward() {
        this._distance += 1;
    }
}

export default RacingCar;