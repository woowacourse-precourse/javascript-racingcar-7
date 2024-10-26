# 🏎️ 자동차 경주 (우아한 프리코스 2차 과제)

## ✍️ 노션 정리
[notion](https://almond-drip-5f0.notion.site/2-126221c9c513812ca23dfb9fc02c4ce9?pvs=4)

## ➡️ 기능 요구 사항

- 경주할 자동차 이름 입력 및 쉼표 기준으로 분리
- 사용자가 잘못된 값 입력 시 "[ERROR]" 로 시작하는 메세지와 함께 Error를 발생시킨 후 애플리케이션 종료
- 이동 횟수 입력
- 랜덤으로 숫자 생성하는 함수 작성
- 전진하는 조건을 만족할 때, 전진했음을 적용
- 각 시행 차수 별 결과 출력
- 게임 완료 후 우승자 출력

## 🔄 동작 과정

- 자동차 이름 입력 및 검증
- 시행 횟수 입력 및 검증
- 시행 횟수마다 자동차의 전진 여부를 자동차 별로 출력
- 우승자 출력
- 주어진 시행 횟수 내에 우승자가 가려지지 않는 경우 현재까지 가장 멀리 이동한 자동차 이름 출력

## 🫢 배운점

### 🕵️ 파라미터화 테스트

- 다양한 테스트 데이터에 대해서 동일한 테스트 코드를 돌리는 방법
- 반복되는 테스트 코드를 제거할 수 있다.

❗ test.each() 함수

- 테스트 데이터를 2차원 배열에 담아서 test.each() 함수의 인자로 넘기면, 배열을 루프 돌면서 각 테스트 데이터를 대상으로 테스트 함수를 호출해준다. 또한, 테스트 이름에도 테스트 데이터 값을 삽입해주기 떄문에 여러 테스트 간에 구분을 용이하게 해준다.

❗ describe.each() 함수

- 좀 더 복잡한 함수에 대한 파라미터화 테스트를 작성할 때, 사용한다.
- 여러 테스트 함수를 여러 테스트 데이터를 대상으로 실행해야 할 때 사용한다.
