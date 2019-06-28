/**
 * promiseALL
 *
 * @author GuoBin on
 */


function getJson1() {
  return new Promise((resolve) => {
    console.log(1);
    setTimeout(() => {
      resolve(2);
    }, 500);
  });
}

function getJson2() {
  return new Promise((resolve) => {
    console.log(3);
    setTimeout(() => {
      resolve(4);
    }, 500);
  });
}

function getJson3() {
  return Promise.all([getJson1(), getJson2()]);
}

getJson3().then(res => {
  console.log(res);
});

function init() {
  getJson1().then(res => console.log(res));
  getJson2().then(res => console.log(res));
}

init();