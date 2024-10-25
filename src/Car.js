//* 자동차 클래스
class Car {
    _distance = 0; // 인스턴스 변수

    constructor({name}){ // 생성자
        this.name = name; // * 처음부터 name으로 지정해주기 때문에, getter가 필요없다.
    }

    //* 그냥 distance 이렇게 쓰면, 무한 루프가 발생한다. setter 함수내에서 자기자신을 호출하기 때문.
    // * 자기자신을 호출하는 (재귀함수)를 방지하기 위해서, 접근자 프로퍼티명과 데이터 프로퍼티 명을 다르게 한다.
    get distance(){ // distance 얻기
        return this._distance;
    }

    set distance(distance){ // distance : number
        this._distance = distance;
    }


}

export default Car;

// * 사용 예시
const car = new Car({name : 'tesla'});
console.log(car.distance); // get 명령으로 () 안 붙어도 됨
car.distance = 123;
console.log(car.distance);


