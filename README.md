# javascript-racingcar-precourse

## 기능 목록

### 입력받기

- [x] 자동차의 이름이 담긴 문자열을 입력받는다
- [x] 시도할 횟수를 입력받는다.
  - [x] 횟수가 정수가 아닐 경우 Error를 발생시킨다
- [x] 자동차의 이름을 ,을 이용해 분리하여 저장한다.
  - [x] 자동차의 이름이 5자보다 길 경우 Error를 발생시킨다

### 게임 진행하기

- [x] 입력받은 횟수 만큼 자동차 전진 시도를 반복한다

### 자동차 전진 시도

- [x] 자동차를 하나씩 순회하며 랜덤 숫자를 뽑는다
- [x] 랜덤 숫자가 4 이상일 경우, 자동차의 현재 위치를 한 칸 전진시킨다.
- [x] 현재 자동차와 자동차의 현재 위치를 출력한다
- [x] 순회가 끝나면 줄바꿈을 한다.

### 최종 우승자 선정 및 출력

- [x] 자동차의 위치를 비교하여 가장 멀리 간 자동차를 선정하여 출력한다
  - [x] 공동 우승자가 있을 경우, 쉼표를 이용해 구분하여 출력한다

## 테스트 코드 작성

**입력 유효성 검사**

- [x] 자동차의 이름이 5자보다 길 경우
- [x] 자동차의 이름이 없을 경우
- [x] 자동차의 이름이 중복될 경우
- [x] 시도 횟수가 음수일 경우
- [x] 시도 횟수가 정수가 아닐 경우

**게임 결과**

- [x] 우승자가 한 명일 경우
- [x] 우승자가 한 명 이상일 경우

## 목표 설정

- 테스트 코드를 효율적으로 작성한다
- 함수를 효율적으로 분리하는 방법을 고민한다
- 변수명과 함수명을 통해 의도를 드러낸다
- 에러 메세지를 상세히 작성한다.
