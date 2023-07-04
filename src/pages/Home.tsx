import { Button, ButtonGroup, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { Form, Link } from 'react-router-dom';
import Layout from '../layout';

function Home() {
	const isError = false;
	const errorMessage = 'Error';

	return (
		<Layout centerContent>
			<Button as={Link} to='/auth' bg={'green.400'} mb={10}>
				Auth ModeDev
			</Button>
			<Form method='POST'>
				<FormControl isRequired isInvalid={isError}>
					<FormLabel>Email</FormLabel>
					<Input placeholder='Put your email here...' defaultValue='test@test.com' required type='email' name='email' />
					{isError && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
				</FormControl>
				<FormControl mt='3' isInvalid={isError}>
					<FormLabel>Code</FormLabel>
					<Input placeholder='Put the code we sent you here' name='code' />
					{isError && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
				</FormControl>

				<ButtonGroup mt={5}>
					<Button type='submit' name='intent' value='send_code' bg='pink.600'>
						Send Code
					</Button>
					<Button type='submit' name='intent' value='login' bg='yellow.400'>
						Log In
					</Button>
				</ButtonGroup>
			</Form>
		</Layout>
	);
}

export default Home;
