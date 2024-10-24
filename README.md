# javascript-racingcar-precourse
# **자동차 경주 게임**

# 2주차 미션 목표
- 함수를 각각 분리하기
- 각 함수별로 테스트코드 작성하기
- 폴더, 스크립트를 나눔으로써 가독성 높이기
- 커밋컨벤션에 맞추어 커밋하기


# 폴더 구조
src
- IO.js //입출력 처리 클래스
- moveCounter.js //전진 횟수 계산 담당 클래스
-

- App.js // 애플리케이션의 메인 로직을 관리하는 클래스
- 상수들을 모아놓은 폴더.. 에러메시지 관련 상수 정의.. 사용자 인터페이스 메시지 관련 사수 정의.. 
- 문자열 계산 로직 담당 클래스.. 애플리케이션의 진입점.. 사용자 입력 처리 클래스.. 

# 구현할 기능 목록
1. 게임이 시작되면 자동차 이름을 묻는다.
2. 쉼표를 사용하여 제대로 입력했다면 시도할 횟수를 묻는다.
- 이름을 제대로 입력하지 않았을 시(쉼표 이외의 구분자를 사용하거나 이름이 5자를 초과했을 경우) 에러를 발생시킨다.
3. 시도할 횟수가 제대로 입력되었다면 전진하는 자동차와 자동차 이름을 출력한다.
- 횟수를 제대로 입력하지 않았을 시(숫자 이외의 입력) 에러를 발생시킨다.
4. 랜덤함수를 통해 0과 9 사이에서 무작위로 4 이상이 나오는 경우 전진한다.
5. 입력한 횟수만큼 전진, 멈춤 여부를 계산하여 순위를 매긴다.
6. 우승자가 한 명인 경우 최종 우승자 : 출력한다.
- 우승자가 여러 명일 경우 쉼표를 이용하여 구분한다.


# 예외 처리
- 이름을 제대로 입력하지 않았을 시
  - 쉼표 이외의 구분자를 사용한 경우 "[ERROR] 쉼표 이외의 구분자는 입력할 수 없습니다." 라는 메시지 출력 후 예외 발생
  - 이름이 5자리를 초과한 경우 "[ERROR] 이름은 5자리를 초과할 수 없습니다." 라는 메시지 출력 후 예외 발생

- 횟수를 제대로 입력하지 않았을 시
  - 숫자 이외의 입력을 한 경우 "[ERROR] 숫자 이외의 값은 입력할 수 없습니다." 라는 메시지 출력 후 예외 발생


# 커밋 메시지
- feat : 새로운 기능을 추가한 경우
- fix : 버그 수정
- docs : 문서를 수정한 경우
- style : 코드 스타일, 포멧, 주석을 변경
- refactor : 코드 리팩토링
- test : 테스트 관련 코드를 수정한 경우
- chore : 코드 수정이 아닌, 단순 폴더명 파일명 등을 수정한 경우


** 테스트코드 추가

