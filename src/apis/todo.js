import axios from 'axios';

// TODO: create a basic server, to store the following
// 1. tasks
// 2. intervals
// 3. users 

export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});
