import React from 'react';
import { Button, Text, Heading, Link, useTheme } from '@chakra-ui/react';
import CustomLink from '../components/CustomLink';
import ToggleMode from '../components/ToggleMode';

const Index = () => {
	return (
		<div>
			<CustomLink href="/about" ChakraComponent={Button}>
				This is a link
			</CustomLink>

			<Heading>This is a heading</Heading>
			<ToggleMode />
		</div>
	);
};

export default Index;
