let func = async function() {
    return 1;
};

// console.log(func);

// func().then(console.log);

async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("complete"), 1000)
    });

    let result = await promise;

    console.log(result);
}

f();

function f2() {
    let promise = Promise.resolve(1);
    // error
    // let result = await promise;
}

async function f3() {
    await Promise.reject(new Error("error"));
}

// same

async function f4() {
    throw new Error("error");
}

f4().catch(console.log);

async function f5() {
    try {
        let result = await f3();
    } catch(error) {
        console.log(error);
    }
}

f5();

function loadJson(url) {
    return fetch(url)
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
  }
  
  loadJson('no-such-user.json')
    .catch(alert); // Error: 404

async function loadJson2(url) {
    let response = await fetch(url);

    if (response == 200) {
        let json = await response.json();
        return json;
    }

    return new Error(response.status());
}

loadJson2('no-url').catch(console.log);