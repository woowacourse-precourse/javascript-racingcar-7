const validateCarName = (name) => {
    if (name.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
    }

    const regex = /^[A-Za-z]+$/; // 영어 알파벳만 허용
    if (!regex.test(name)) {
        throw new Error("[ERROR] 자동차 이름은 영어 알파벳으로만 구성되어야 합니다.");
    }
};
