// 결론 async function 안에서 return Promise 할꺼면 굳이 try Catch 사용 할 필요 없음!

// test callback 함수
function test(data, callback){
  console.log("test function start");
  // return callback({err : {errMsg : "callback 에러 테스트"}});
  // return callback(null);
  throw {err : {errMsg : "throw 에러 테스트"}};
}

// case 1 : promise 안에 try catch 작성
async function case1(){
  return new Promise((s, f) => {
    try {
      console.log("[case 1 : promise 안에 try catch 작성] 시작");
      test({}, (err) => {
        if (err) {
          console.log('case 1 return fail');
          return f(err);
        }
        return s(undefined);
      });
    } catch (err) {
      console.log("case 1 try catch", 'err', err);
      return f({err : {errMsg : "case 1 catch throw err"}});
    }
  });
}

// case 2 : promise 밖에 try catch 작성
async function case2(){
  try {
    return new Promise((s, f) => {
      console.log("[case 2 : promise 밖에 try catch 작성] 시작");
      test({}, (err) => {
        if (err) {
          console.log('case 2 return fail');
          return f(err);
        }
        return s(undefined);
      });
    });
  }
  catch(err){
    console.log("case 2 try catch", 'err', err);
    return f({err : {errMsg : "case 2 catch throw err"}});
  }
}

// 
// case 3 : try catch 사용하지 않음
async function case3(){
  return new Promise((s, f) => {
    console.log("[case 3 : try catch 사용하지 않음] 시작");
    test({}, (err) => {
      if (err) {
        console.log('case 3 return fail');
        return f(err);
      }
      return s(undefined);
    });
  });
}

(async()=>{
  try{
    await case1();
    console.log("case 1 성공");
  }
  catch(err){
    console.log("case 1 async catch err!", err, '\n');
  }

  try{
    await case2();
    console.log("case 2 성공");
  }
  catch(err){
    console.log("case 2 async catch err!", err, '\n');
  }

  try{
    await case3();
    console.log("case 3 성공");
  }
  catch(err){
    console.log("case 3 async catch err!", err, '\n');
  }
})()