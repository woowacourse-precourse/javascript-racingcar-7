export class Validator {
    static CarNames(names) {

        if (names.length === 0 || names.some(name => name.trim() === '')) {
            throw new Error("[ERROR] 이름은 공백이 올 수 없습니다.");
        }

        for (let i = 0; i < names.length; i++) {
            const name = names[i].trim();

            if (name.length > 5) {
                throw new Error("[ERROR] 이름은 5자 이하만 가능합니다.");
            }
        }

        const uniqueNames = new Set(names.map(name => name.trim()));
        if (uniqueNames.size !== names.length) {
            throw new Error("[ERROR] 이름은 중복될 수 없습니다.");
        }
    }

    static RaceRounds(num) {
        const parsedNum = Number(num);

        if (Number.isNaN(parsedNum)) {
            throw new Error("[ERROR] 시도 횟수는 숫자를 입력해야 합니다.");
        }

        if (num < 0) {
            throw new Error("[ERROR] 시도 횟수는 음수 값을 허용하지 않습니다.");
        }
    }
}