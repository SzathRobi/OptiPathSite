'use client';

import { useTheme } from 'next-themes';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import { Button } from './ui/button';

const ThemeSwitcher = () => {
	const { theme, setTheme } = useTheme();

	const handleThemeSwitch = () => {
		if (theme === 'dark') {
			setTheme('light');
			return;
		}

		setTheme('dark');
	};

	return (
		<Button variant="ghost" onClick={handleThemeSwitch}>
			{theme === 'dark' ? (
				<HiOutlineMoon size={24} />
			) : (
				<HiOutlineSun size={24} />
			)}
		</Button>
	);
};

export default ThemeSwitcher;
