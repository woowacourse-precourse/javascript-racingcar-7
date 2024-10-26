# javascript-racingcar-precourse

## 자동차 경주 게임

1. 사용자에게 경주할 자동차의 이름을 입력받는다.
2. 몇번을 시도할 것인지 사용자에게 입력받는다.
3. 입력받은 횟수만큼 경기를 진행시킨다.
4. 경기가 진행되는 동안 자동차는 전진하거나 정지한다.
   0 - 9 사이의 수에서 4 이상의 값이 나올 경우 전진한다.
   그리고 4 미만의 값이 나올 경우 정지한다.
5. 경기가 끝난 후 가장 멀리간 자동차를 우승자로 선정한다.
   이때, 공동 우승자가 발생할 수 있다.

## 기능 구현 목록

1. 사용자에게 값을 입력받기.

- [x] 경주할 자동차의 이름을 사용자에게 입력받는다.
- [x] 예외 처리 ----------------

  - [x] 이름은 5자 이하만 가능하다.
        만약 5자를 초과할 경우 에러가 발생하도록 처리한다.
  - [x] 이름을 중복으로 작성할 경우 에러가 발생하도록 처리한다.
  - [x] 입력받은 이름에 공백이 하나라도 존재하면 에러가 발생하도록 처리한다.

- [x] 사용자의 이름은 쉼표(,)로 구분하여 담는다.
- [x] 시도할 횟수를 입력받고, 그 값을 출력해본다.
- [x] 입력받은 횟수가 숫자가 아닐 경우 에러 메시지가 출력되도록 한다.

2. 입력받은 값을 통해 정보 처리.

- [x] 0-9 사이의 정수 중 한 개의 정수를 반환하는 기능 구현.
- [x] 예외 처리를 통과한 자동차 이름의 갯수와 같은 빈 배열을 하나 만든다.
- [x] 0-9 사이의 수중 4 이상일 경우 전진('-'추가),
      4 미만일 경우 정지(아무일도 일어나지 않음)한다.
      \*\* 이때, object의 key값과 value값을 사용해서 값을 수정한다.
- [x] 입력받은 실행 횟수만큼 실행 결과를 출력한다
- [ ] 자동차 이름의 갯수만큼 실행 결과를 출력한다.

3. 처리된 결과를 통해 우승자를 선정한다.

- [ ] 경기가 끝나면 누가 멀리 갔는지 비교하는 기능 구현.
- [ ] 경기가 완료되면 누가 가장 멀리갔는지 우승자를 출력한다.
- [ ] 우승자가 여러명일 경우 모두 출력한다.

##
