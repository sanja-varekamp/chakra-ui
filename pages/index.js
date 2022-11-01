import React from 'react';
import { Button, Text, Heading, Link, useTheme } from '@chakra-ui/react';
import CustomLink from '../components/CustomLink';

const Index = () => {
	return (
		<div>
			<CustomLink
				href="/about"
				ChakraComponent={Button}
				m="1rem 3rem"
				bg="teal"
				textDecoration="none"
				_hover={{
					background: 'blue',
					color: 'teal.500',
				}}
			>
				This is a link
			</CustomLink>
		</div>
	);
};

export default Index;
