// Import stylesheets
import './style.css';

//import external fils
import { sayHi, sayBye } from './Object/object.js';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Object</h1>`;

// sayHi('Hemant! Welcome....');

//Object
let usersData = 'https://jsonplaceholder.typicode.com/users';
let todosData = 'https://jsonplaceholder.typicode.com/todos/5';
let albumData = 'https://jsonplaceholder.typicode.com/albums';
let todoOne = 'https://jsonplaceholder.typicode.com/posts/1/comments';
1; //this is the promis example
sayBye(albumData)
  .then((data) => {
    console.log('----------------promis example------------------');
    console.log('promise resolved', data);
  })
  .catch((err) => {
    console.log('promise Reject', err);
  });
2; //this is the promis chaining example
sayBye(usersData)
  .then((data) => {
    console.log('----------------promis chaining------------------');
    console.log('promise1 resolved', data);
    return sayBye(todosData);
  })
  .then((data) => {
    console.log('promise2 resolved', data);
  })
  .catch((err) => {
    console.log('promise Reject', err);
  });
3; // fetch API
fetch(usersData)
  .then((responce) => {
    console.log('resolve', responce);
    return responce.json();
  })
  .then((data) => {
    console.log(data[1]);
  })
  .catch((error) => {
    console.log('reject', error);
  });
4; //  async & await
const newSinc = async () => {
  const resolve = await fetch(todoOne);
  if (resolve.status !== 200) {
    throw new Error('Cannot fetch the data');
  }

  const data = await resolve.json();
  return data;
  //console.log('Data from async method ', data);
};

newSinc()
  .then((data) => console.log('resolved', data, 'asdfasdfadsfadsf'))
  .catch((error) =>
    console.log('rejected', error.message, '000000000000000000000')
  );
