# javascript-racingcar-precourse

## 스스로 정한 규칙

- 자동차 이름의 크기는 이름들을 쉼표(,)로 나눈 상태에서 양쪽 여백을 제외한 뒤의 크기로 정한다.
- 자동차 이름은 크기가 `1자 이상`, 5자 이하만 가능하다.
- 주어진 횟수는 양의 정수만 가능하다.
- 우승자가 둘 이상인 경우 먼저 입력된 순서대로 출력한다.

## 작업 목록

### 기능 구현

- [x] 자동차 이름들 입력받기
- [x] 주어진 횟수 입력받기
- [x] 자동차 이름을 쉼표(,)로 구분하기
- [x] 자동차 이름 양끝 여백 제거
- [x] RacingCar 클래스 생성
- [x] Random.pickNumberInRange()을 사용하여 전진하는 기능 넣기
- [x] 차수별 실행 결과 출력하기
- [x] 우승자 구하고 출력하기

### 예외 처리

- [x] 자동차 이름에 대한 예외 처리
- [x] 주어진 횟수에 대한 예외 처리

### 그 외 요구 사항

- [ ] AngularJS Git Commit Message Conventions에 맞춰 커밋 메시지 작성
- [ ] JavaScript Style Guide 컨벤션을 지키며 코드 작성
- [ ] indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현하기
- [ ] 3항 연산자를 쓰지 않기
- [ ] 코드를 깔끔하게 리팩토링

## 클래스 역할

### RacingCar 
- 멤버변수  
  - #name : 경주하는 자동차 이름 저장
  - #dist : 자동차가 이동한 거리 저장
- 메서드
  - #validateName(name) : 생성자에 들어온 자동차 이름에 대한 유효성 검사
  - getDistance() : #dist를 리턴
  - getName() : #name을 리턴
  - move() : `Random.pickNumberInRange`의 결과가 임계값 이상이면 #dist에 1을 더함
  - result() : 현재 자동차의 결과 출력
  
