# javascript-racingcar-precourse

## Analyze the problem
0. 요구 조건
* 들여쓰기는 2칸으로 통일할 것
* 삼항 연산자 금지
* 함수를 최대한 작게 할 것
* Jest로 직접 테스트 코드를 작성할 것
1. 입력 단계
* 입력 검증 및 파싱
  * 입력된 플레이어가 없으면 에러 메세지를 출력해야 한다.
  * 시도할 횟수가 음수일 경우나 입력이 없는 경우, 숫자가 아닌 경우 에러 메세지를 출력해야 한다.
    * 시도 횟수가 0인 경우 바로 출력으로 넘어간다.
  * 쉼표로 split한 이후 1개 이상의 이름이 5자를 초과할 경우 에러가 발생해야 한다.
  * 쉼표 이외의 다른 문자는 전부 이름으로 사용 가능하다(숫자, 특수 기호 포함)
2. 처리 단계
* 입력으로 참가자 이름의 배열을 받는다. 이것이 결과 배열의 원소인 JSON 객체의 키다.
* 시도할 횟수만큼 반복문을 돌리고 결과를 JSON 객체로 만들어 2차원 리스트 형태로 반환한다.
* 각 회차마다 전진 혹은 후진을 위해 주어진 랜덤 함수를 활용한다.
3. 출력 단계
* 입력으로 들어온 결과 문자열을 적절한 형태로 출력할 것
4. 아키텍처와 코딩 스타일
* Linter(ESLint + Prettier)를 잠시 비활성화하고 코드를 작성한 다음, 스타일을 점검하고 PR 후 다시 Linter 환경을 구성해 Linting한다.
* 정규표현식을 사용할 경우 저수준 메서드에서 메서드 당 1~2회만 사용한다.
* 모듈 구조
  * 에러 메세지를 별도의 상수 객체로 된 모듈로 분리한다

5. 테스트
* jest 테스트 코드를 반드시 작성한다.
  * Mocking Function을 먼저 작성한다.
  * 예외 케이스를 검증한다.
  * 경계값 검사(Boundary value test)를 목표로 테스트 코드를 작성하여 코너 케이스/엣지 케이스를 확실하게 검증한다.

6. 공통 피드백 중 반영할 사항
- [ ] 요구사항을 제대로 반영했는가?
- [ ] 변수명은 일체의 축약 없이 제 역할을 잘 드러내는가?
- [ ] 커밋 메세지에 신경을 쓰며 PR/Issue를 포함하지 않는가?

7. 우테코 개인 목표 달성
- [ ] 분석이 필요한 경우를 README.md에 전부 기록하였는가?
- [ ] 활용이 필요한 API 등의 배경 지식을 README or 노션에 기록하였는가?
- [ ] 1주차 PR 피드백을 노션에 기록하고 2주차 과제에 적절히 반영하였는가?
- [ ] 1시간 이상 고민하게 된 경우 디스코드 포럼에 관련 질문을 찾거나 없으면 질문하였는가?

## Reference

## Target features
* 1단계: 기능 구현
- [x] 테스트 코드 작성
- [x] 입력 예외 검증
  - [x] 에러 메세지 모듈 분리
- [ ] 입력 파싱
- [ ] 처리 로직
- [ ] 출력 포매팅
- [ ] 테스트 수행
* 2단계: 리팩토링
- [ ] 요구사항 만족 여부 검증
- [ ] 스타일 가이드 만족 여부 검증
- [ ] 1주차 PR 피드백 적용 여부 검증