# javascript-racingcar-precourse
# javascript-calculator-precourse

## 기능 구현
1. 입출력 기능
  -  입력
    - [ ] 경주할 자동차 이름 : `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)`
    - [ ] 시도할 횟수 : `시도할 횟수는 몇 회인가요?`
  - 출력
    - [ ] 실행 결과 `${이름} : ${전진 여부 (-)}`
    - [ ] 최종 우승자 : `최종 우승자 : ${우승자 이름}`
      - [ ] 공동 우승자는 쉼표로 구분 (, )
2. 이름, 실행 결과 저장
  - [ ] : 이름 - nameArray에 저장, 실행 결과 - resultArray에 저장
3. 전진 여부
  - [ ] : 난수 값이 4 이상일 경우 전진 (해당하는 element에 '-' 추가)
4. 에러 및 예외 처리
  - Error
    - [ ] 이름을 5자 이상으로 입력했을 경우
  - return 0
    - 아무것도 입력하지 않았을 때

## 프로그래밍 요구 사항
- [ ] indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다.
  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
- [ ] 3항 연산자를 쓰지 않는다.
- [ ] 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어라.
- [ ] Jest를 이용하여 정리한 기능 목록이 정상적으로 작동하는지 테스트 코드로 확인한다.
- @woowacourse/mission-utils에서 제공하는 Random 및 Console API를 사용하여 구현해야 한다.
  - [ ] Random 값 추출은 Random.pickNumberInRange()를 활용한다.
  - [ ] 사용자의 값을 입력 및 출력하려면 Console.readLineAsync()와 Console.print()를 활용한다.

## 공통 피드백
- [ ] 오류를 찾을 때 출력 함수 대신 디버거를 사용한다
- [ ] 이름을 통해 의도를 드러낸다
- [ ] 공백도 코딩 컨벤션이다
- [ ] 의미 없는 주석을 달지 않는다
- [ ] 코드 포매팅을 사용한다
- [ ] JavaScript에서 제공하는 API를 적극 활용한다