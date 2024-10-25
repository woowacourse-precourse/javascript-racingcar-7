import Challenger from './Challenger.js';

// 생성자의 의미가 별로 없는 것 같다.
// challengList 에 대한 접근은 static이 좀 더 맞는 것 같아 보인다.
class ChallengerList {
  constructor(input) {
    this.challengList = this.convertToChallengerObjList(input);
  }

  setChallengerNameList(input) {
    if (typeof input !== 'string') {
      throw new Error();
    }
    return input.split(',');
  }

  //Todo 좀 복잡한 것 같음
  convertToChallengerObjList(input) {
    const challengerNameList = this.setChallengerNameList(input);

    if (challengerNameList.length <= 0) {
      throw new Error('입력을 안 한 case');
    }

    return challengerNameList
      .filter((name) => this.checkNameValidation(name))
      .map((name) => {
        return new Challenger(name);
      });
  }

  getChallengerList() {
    return this.challengList;
  }

  //Todo   이름이 공백이라면 에러처리
  checkNameValidation(name) {
    if (!this.checkNameLength(name)) {
      throw new Error('[ERROR]: 참여자 이름은 5자 이하여야 합니다.');
    }

    return true;

    //.. 예외케이스
  }

  // enum typed으로 지정해 run()에서 catch해 print 후 throw 하는 방법
  checkNameLength(name) {
    return name.length < 5;
  }
}

export default ChallengerList;
