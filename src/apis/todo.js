import axios from 'axios';

// A basic rest api server providing the following:
// 1. tasks
// 2. intervals
// 3. users
export default axios.create({
	// TODO: to come from env var
	baseURL: 'http://10.0.33.34:3000',
});
