# javascript-racingcar-precourse

## 기능 구현 목록

1. 자동차 경주 안내 문구 출력
2. 경주할 자동차 이름 입력
   - [x] 사용자의 입력 받기
3. 입력 유효성 검사
   - [x] 알파벳 대소문자와 “,”이외에 다른 문자가 들어온 경우 ERROR
4. 자동차 이름 유효성 검사
   - [x] 구분자 ","를 기준으로 분리된 이름 배열에 저장
   - [x] 분리된 이름들 중에 1자 이상 5자 이하가 아닌 경우 ERROR
   - [x] 중복되는 이름이 있는 경우 ERROR (대소문자는 다른 이름으로 취급)
5. 시도할 횟수 입력
   - [x] 사용자의 입력 받기
6. 횟수 유효성 검사
   - [x] 숫자외에 다른 문자가 들어온 경우 ERROR
   - [x] 0이하 또는 너무 큰 수일 경우 ERROR
7. 자동차 이름 저장
   - [x] 이름과 전진 횟수를 가지는 Car 클래스 생성
8. 자동차 경주 시작
   - [x] 자동차 경주 게임 로직을 담을 클래스 생성
9. 이동 횟수동안 반복하며 자동차 경주 반복
   - [x] 난수 생성 함수
   - [x] 4이상의 값일 경우 움직이는 함수(전진 횟수에 1더하기)
   - [x] 중간 결과 출력 함수
10. 최종 우승자 출력
    - [x] 전진 횟수가 가장 큰 수 구하는 함수
    - [x] 우승 자동차를 필터링하는 함수
    - [x] 자동차의 이름을 가져오는 함수
    - [x] 최종 우승자 출력
