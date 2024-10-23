class Validator {
  ValidateName(nameString) {
    const names = nameString.split(',');

    if (names.length < 2) throw new Error('[ERROR] 두 명 이상의 이름을 입력해주세요.');
    if (new Set(names).size !== names.length) throw new Error('[ERROR] 중복되지 않는 이름을 입력해주세요.');

    names.some((name) => {
      if (name === '') throw new Error('[ERROR] 이름을 입력해주세요.');
      if (name.length > 5) throw new Error('[ERROR] 5자 이내의 이름을 입력해주세요.');
    });

    return names;
  }

  ValidateTry(tries) {
    if (tries < 1) throw new Error('[ERROR] 1 이상의 시도 횟수를 입력해주세요.');
    if (isNaN(tries)) throw new Error('[ERROR] 시도 횟수에 숫자만 입력해주세요.');
    if (tries.toString().length > 15) throw new Error('[ERROR] 15자리수 이내의 시도 횟수를 입력해주세요.');

    return tries;
  }
}

export default Validator;
