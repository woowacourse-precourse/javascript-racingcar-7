//* 자동차 클래스
class Car {
    _distance = 0;

    constructor({ name, distance = 0 }) {
        this.name = name;
        this.distance = distance;
    }

    get distance() {
        return this._distance;
    }

    set distance(distance) {
        // distance : number
        this._distance = distance;
    }
}

export default Car;
