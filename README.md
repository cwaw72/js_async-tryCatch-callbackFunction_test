# js_async-tryCatch-callbackFunction_test
callback 함수를 async 함수 처리 시 try catch 처리 테스트

## 예시
**[case 1 : promise 안에 try catch 작성]**
- test function start
- case 1 try catch err { err: { errMsg: 'throw 에러 테스트' } }
- case 1 async catch err! { err: { errMsg: 'case 1 catch throw err' } } 

**[case 2 : promise 밖에 try catch 작성]**
- test function start
- case 2 async catch err! { err: { errMsg: 'throw 에러 테스트' } } 

**[case 3 : try catch 사용하지 않음]**
- test function start
- case 3 async catch err! { err: { errMsg: 'throw 에러 테스트' } } 

**결론**
  - async function 자체를 try catch 한다면 callback 함수를 굳이 try catch로 잡을 필요 x
  - callback 함수 try catch 사용하지 않아도 괜찮아!
