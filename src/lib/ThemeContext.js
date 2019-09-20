import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { usePersistedState } from '../actions/persistedState';

const lightTheme = {
	backgroundColor: 'hsl(0, 0%, 98%)',
	textColor: 'hsl(200, 15%, 8%)',
	elementsColor: 'hsl(0, 0%, 100%)',
	inputsColor: 'hsl(0, 0%, 52%)',
};
const darkTheme = {
	backgroundColor: 'hsl(207, 26%, 17%)',
	textColor: 'hsl(0, 0%, 100%)',
	elementsColor: 'hsl(209, 23%, 22%)',
	inputsColor: 'hsl(209, 23%, 22%)',
};

export const ThemeContext = React.createContext();
export const ThemeProvider = props => {
	const [theme, setTheme] = usePersistedState('theme', 'light');
	const context = React.useMemo(() => ({ theme, setTheme }), [theme, setTheme]);
	return (
		<ThemeContext.Provider value={context}>
			<StyledThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme} {...props} />
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const themeContext = React.useContext(ThemeContext);
	if (!themeContext) {
		throw new Error("useTheme can't be used witout outside of a ThemeProvider");
	}
	const { theme, setTheme } = themeContext;
	const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
	return [theme, toggleTheme];
};
