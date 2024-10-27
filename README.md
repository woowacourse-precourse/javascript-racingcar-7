# javascript-racingcar-precourse

## 기능 요구 사항

**초간단 자동차 경주게임을 구현한다.**

- 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
- 각 자동차에 이름이 부여되며, 전진하는 자동차를 출력할 때 자동차 이름은 같이 출력한다.
- 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우다.
- 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한명 이상일 수 있다.
- 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 `Error`를 발생시킨 후 애플리케이션은 종료되어야한다.
- npm run start로 작업물 확인
- npm run test로 jest를 돌려 test 코드 확인하기

### 프로그래밍 요구 사항

- indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
  ex) while문 안에 if문 -> 들여쓰기 2
- 3항 연산자를 쓰지 않는다.
- 기능 별 메소드 분리하기

### 구현할 기능 목록

- [x] 자동차 이름 문자열 입력
- [x] 몇 번 이동할지 횟수 입력
- [x] 자동차 이름 문자열을 쉼표(,)단위로 구분
  - [x] 구분해서 각각의 자동차 별로 관리 (객체)
- [ ] 입력한 이동횟수를 바탕으로 자동차 별 전진 값 구하기
  - [x] n회 마다 -> 0-9까지 숫자들로 자동차들에게 전진 및 정지 부여
    - [x] 0-9 숫자 중 4이상일 경우만 전진 (전진 및 정지 함수 따로 구현)
  - [ ] 1회가 끝날때마다 "이름 : -" 표시로 횟수 출력하기
- [x] 최종우승자 출력하기
  - [x] "-" 횟수의 갯수를 바탕으로 최종우승 자동차 출력
    - [x] "-"문자 repeat 문자열 메소드 이용
  - [x] 갯수가 같을 경우 공동 우승자 처리
- [ ] 에러처리
  - [ ] 자동차 입력
    - [ ] 쉼표 없으면 에러차리
  - [ ] 이동횟수 입력
    - [ ] 숫자가 아닌 다른 값이 들어올 경우, 에러처리

### 추가 수정 사항
