import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';

import { Box, Heading, Text, Button } from '@chakra-ui/react';

function ErrorBoundary() {
	const error = useRouteError();

	let err = { status: 418, title: 'Error Desconocido', message: 'Ocurrio un error de algun tipo' };

	if (isRouteErrorResponse(error)) {
		err = { status: error.status, title: error.data.error ?? error.statusText, message: error.data.message };
	}

	return (
		<Box textAlign='center' py={10} px={6}>
			<Heading
				display='inline-block'
				as='h2'
				size='2xl'
				bgGradient='linear(to-r, teal.400, teal.600)'
				backgroundClip='text'
			>
				{err.status}
			</Heading>
			<Text fontSize='18px' mt={3} mb={2}>
				{err.title}
			</Text>
			<Text color={'gray.500'} mb={6}>
				{err.message}
			</Text>

			<Button
				as={Link}
				to='/'
				colorScheme='teal'
				bgGradient='linear(to-r, teal.400, teal.500, teal.600)'
				color='white'
				variant='solid'
			>
				Go to Home
			</Button>
		</Box>
	);
}

export default ErrorBoundary;
