## 자동차 경주

### ✅ 진행방식 체크리스트

- [x] 기능 구현전 기능 목록을 만들
      고 기능단위로 커밋하는 방식

### ✅ 기능 요구사항 체크리스트

- [x] 주어진 횟수동안 전진 또는 멈춤
- [x] 이름을 부여한뒤 출력
- [x] 이름은 ,기준으로 구분
- [x] 이름은 5자 이하만 가능
- [x] 몇번 이동할것인지 입력
- [x] 전진 조건은 0~9사이 무작위값 중 값이 4이상일 경우
- [x] 우승자는 한명 이상일수도있음
- [x] 우승자가 여러명일 경우 ,를 이용하여 구분
- [x] 잘못된 값 입력시 [ERROR]

### ✅ 입출력 요구 사항 체크리스트

- 입력
  - [x] 경주할 자동차 이름
  - [x] 시도할 횟수
- 출력
  - [x] 차수별 실행결과
  - [x] 우승 결과

### ✅ 프로그래밍 요구사항 체크리스트

- [x] 들여쓰기 3이 넘지않도록 구현
- [x] 3항 연산자 쓰지않는다
- [x] 함수가 한가지일만
- [x] jest 테스트 코드를 사용

### 📝 기능 목록

- docs : 기능 목록 추가
- feat : 입출력 로직 구현
- docs : 기능 목록 수정
- feat : 차수별 경주를 진행하는 로직 구현
- feat : 차수별 진행 결과를 출력하는 로직 구현
- feat : 가장 멀리간 자동차를 구하는 로직 구현
- feat : 이름이 6글자 이상일 경우 에러 구현
- refactor : Racer 클래스 구현
- refactor : Racing 클래스 구현
- refactor : App.js내의 로직을 추상화 클래스로 분리
- refactor : CustomError 클래스 구현
- refactor : constants 폴더 생성후 상수 분리
- refactor : Winners 클래스 구현
- refactor : racing 클래스내의 winner 로직 삭제
- refactor : private 메서드로 레이싱 로직 수정
- refactor : 하드코딩된 값을 상수로 대체
- refactor : 레이싱 클래스 리팩토링과 우승자 클래스 도입으로 해당 로직 개선
- refactor : printResultByRound으로 이름 변경
- refactor : 가독성을 위해 App내의 로직을 메서드로 분리
- docs : 기능 목록 수정
- chore : eslint 설정 적용
- refactor : 하드코딩된 값을 상수로 대체
- feat : Validator 클래스 구현
- refactor : racers와 totalRound 입력값 검증하는 로직 수정
- feat : CustomErrorTest 구현 후 에러케이스 추가
- docs : 기능 목록 수정
- docs : readme 수정
