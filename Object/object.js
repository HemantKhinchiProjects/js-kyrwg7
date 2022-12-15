function sayHi(user) {
  console.log(`Hello, ${user}!`);
}
var retdata = [];
function sayBye(users) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        let data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject('error getting resource');
      }
    });
    request.open('GET', users);
    request.send();
  });
}

export { sayHi, sayBye }; // a list of exported variables
