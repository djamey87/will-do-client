import { useState, useEffect } from 'react';

export const usePersistedState = (key, defaultValue) => {
	const [state, setState] = useState(localStorage.getItem(key) || defaultValue);
	console.log('usePersistedState', state);

	useEffect(() => {
		localStorage.setItem(key, state);
	}, [state, key]);

	return [state, setState];
};
