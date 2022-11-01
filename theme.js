import { extendTheme } from '@chakra-ui/react';

const fontSizes = {
	custom1: '10rem',
	sm: '1:3rem',
};

const config = {
	initialColorMode: 'dark',
};

const theme = extendTheme({ config, fontSizes });

export default theme;
