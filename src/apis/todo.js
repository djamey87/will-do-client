import axios from 'axios';

// TODO: create a basic server, to store the following
// 1. tasks
// 2. intervals
// 3. users

export default axios.create({
  	baseURL: 'http://10.0.33.34:3000'
});
