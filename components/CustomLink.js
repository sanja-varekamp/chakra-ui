import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';

import React from 'react';

const CustomLink = ({ ChakraComponent, href, children, ...props }) => {
	return (
		<NextLink href={href} passHref>
			<Link>
				<ChakraComponent {...props}>{children}</ChakraComponent>
			</Link>
		</NextLink>
	);
};

export default CustomLink;
