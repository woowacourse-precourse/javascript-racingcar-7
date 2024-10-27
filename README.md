# javascript-racingcar-precourse

## 2주차 자동차 경주

### 기능 구현 리스트

1. 사용자로부터 자동차 리스트와 경기 횟수를 입력받는다. (유효성 검사)

- 이름이 5자리 초과 시 <span style='background-color:#ffdce0; color:#000000;'> 예외 처리</span>
- 자동차 이름이 중복 되었을 시 <span style='background-color:#ffdce0; color:#000000;'>예외처리</span>
- 경기 횟수가 문자일 경우 <span style='background-color:#ffdce0; color:#000000;'>예외처리</span>
- 경기 횟수가 0이거나 음수일 경우 <span style='background-color:#ffdce0; color:#000000;'>예외처리</span>

2. 자동차 객체 생성

- 입력값에서 자동차를 쉼표를 기준으로 구분
- 자동차 객체를 생성(이름,거리)

3. 게임 실행

- 입력 받은 경기 횟수만큼 게임 진행
- 0~9 까지 랜덤 값을 받아 4이상이면 전진
- 경기가 한번 진행될때마다 자동차의 현재 거리 출력

4. 경기 종료

- 가장 많은 거리를 이동한 자동차가 승리
- 같은 거리를 움직였다면 공동 우승
