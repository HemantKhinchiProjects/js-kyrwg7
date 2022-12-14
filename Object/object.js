function sayHi(user) {
  console.log(`Hello, ${user}!`);
}

function sayBye() {
  let usersData = 'https://jsonplaceholder.typicode.com/users';

  getTodos = (users, callBack) => {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.addEventListener('readystagechange', () => {
        if ((request.readyState === 4, request.status === 200)) {
          let data = JSON.parse(request.responseText);
          resolve(data);
        } else if (request.response === 4) {
          reject('error getting resource');
        }
      });
      request.open('GET', users);
      request.send();
    });
  };
  //call back hell setution
  getTodos(usersData, (err, data) => {
    console.log(data);
    getTodos(todosData, (err, data) => {
      console.log(data);
      getTodos(albumData, (err, data) => {
        console.log(data);
      });
    });
  });
}

export { sayHi, sayBye }; // a list of exported variables
