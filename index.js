// Import stylesheets
import './style.css';

//import external fils
import { sayHi, sayBye } from './Object/object.js';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Object</h1>`;

// sayHi('Hemant! Welcome....');

//Object
//let usersData = 'https://jsonplaceholder.typicode.com/users';
//let todosData = 'https://jsonplaceholder.typicode.com/todos/5';
let albumData = 'https://jsonplaceholder.typicode.com/albums';
sayBye(albumData)
  .then((data) => {
    console.log('promise resolved', data);
  })
  .catch((err) => {
    console.log('promise Reject', err);
  });
