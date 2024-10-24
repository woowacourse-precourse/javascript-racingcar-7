# javascript-racingcar-precourse

# 기능구현 리스트
- [✅] 자동차 이름 입력 
- [✅] 자동차 이름 입력 유효성 검증
- [✅] 자동차 클래스 만들기
- [✅] 리스트<자동차> 생성.
- [✅] 시도횟수 입력
- [✅] 시도 횟수 유효성 검증 (0 초과)
- [✅] 횟수만큼 반복할 함수 리스트<객체>순회 => 랜덤 함수를 돌리고, 조건 통과시 distance 속성에 "-"추가
- [✅] 리스트<객체> 순회로 현재 거리 출력 
- [✅] 최종 우승자 출력(max : distance의 길이를 통해,)
- [✅] 예외처리1. 자동차마다 trim() 처리,

# 추가 테스트케이스
## 입력에 이상이 있는 경우
- [] 이름으로 ""이 입력된 있는 경우
- [] 5자 초과된 이름이 입력된 경우
- [] 중복된 이름이 있는 경우
## 없는 경우
- [✅] 자동차 3개를 입력하고, 2개의 우승자가 발생하는 상황
- [✅] 자동차 3개를 입력하고, 3개의 우승자가 발생하는 상황

# 생각해볼 것들
## 오류메시지로 잘못된 입력입니다.는 사용자에게 어떻게 비춰질수 있을까?
알수 없는 오류나, 잘못된 입력입니다라는 오류메세지를 사용자로서 맞닥들이게 되면, 정확히 본인이 어떤 입력을 잘못했는지 알 수 없기에 굉장히 어렵다. 물론 알 수 없는 오류를 출력해야할 수 밖에 없는 일도 있으나, 예상 가능한 오류라면 충분한 메시지를 출력해야 한다.
## 공백(" ")에 대해서
### 공백(" ")만 있는 경우
불허용
### 공백(" ")이 앞뒤에 포함된 경우
유저 의도가 없는 경우가 많으니 trim()으로 잘라줄것
### 공백(" ")이 중간에 포함된 경우
기획 재량
