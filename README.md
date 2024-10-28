# javascript-racingcar-precourse

## MVC 패턴을 이용, 기능구현 목록

- [x] constants 폴더

  - [x] Messages.js
    - [x] 자동차 이름 입력 메세지
    1. "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    - [x] 횟수 입력 메세지
    1. "시도할 횟수는 몇 회인가요?"
    - [x] 실행 결과 메세지
    1. "실행 결과"
    - [x] 최종 우승자 메세지
    1. "최종 우승자 : "
  - [x] Errors.js
    - [x] 에러 메세지
    1. "[ERROR]"
  - [x] Conditions.js
    - [x] 전진하는 조건
    1. 숫자 0
    2. 숫자 9
    3. 숫자 4
    - [x] 자동차 이름 길이
    1. 최소 1
    2. 최대 5

- [x] models 폴더

  - [x] Car.js

  1. 얼마나 앞으로 갔는지
  2. 자동차 이름

  - [x] Race.js

  1. 라운드 수
  2. 참가 자동차 이름

- [x] views 폴더

  - [x] InputViews.js

  1. 자동차 이름 입력
  2. 시도 횟수 입력

  - [x] OutputViews.js

  1. 실행결과 출력
  2. 최종 우승자 출력

- [x] controllers 폴더

  - [x] RacingController.js
    - [x] 게임 생성
    - [x] 초기화
    1. 자동차 이름
    2. 라운드 수
    - [x] 경주 시작
    - [x] 각 라운드 진행 처리
    - [x] 우승자 발표 처리
    - [x] 유효성 검증
    1. 자동차 이름 길이 검증
    2. 라운드 수 유효성 검증
    3. 에러 발생 시 에러 메세지 출력
