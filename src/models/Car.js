// 1.	주어진 횟수 동안 여러 대의 자동차가 전진 또는 멈출 수 있다. 자동차 클래스를 먼저 만들어준다. 자동차는 이름과 위치가 필요하다.

class Car {
    constructor(name) {
        this.name = name;
        this.position = 0;
    }
    getPosition(){
        return this.position;
    }
}

export default Car;
