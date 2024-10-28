class Car {
    constructor(name) {
        if (name.length > 5) throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
        this.name = name;
        this.position = 0;
    }

    // 무작위 값에 따라 전진 조건 충족 시 전진
    move(randomNumber) {
        if (randomNumber >= 4) this.position += 1;
    }

    // 현재 위치 상태를 '-'로 반환
    getPosition() {
        return '-'.repeat(this.position);
    }
}

module.exports = Car;
