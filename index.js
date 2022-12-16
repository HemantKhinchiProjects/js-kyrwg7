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
//this is the promis example
sayBye(albumData)
  .then((data) => {
    console.log('----------------promis example------------------');
    console.log('promise resolved', data);
  })
  .catch((err) => {
    console.log('promise Reject', err);
  });
//this is the promis chaining example
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
// fetch API
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
