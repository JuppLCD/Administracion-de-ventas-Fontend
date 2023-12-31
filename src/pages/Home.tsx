import { Button, ButtonGroup, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import Layout from '@/layout';

import { Form, Link, useActionData, useNavigate } from 'react-router-dom';
import useAuth from '@/hooks/useAuth';

function Home() {
	let actionData = useActionData() as undefined | { [key: string]: string };
	const { updateToken } = useAuth();
	const navigate = useNavigate();

	if (!actionData) {
		actionData = {};
	}

	if (actionData.token) {
		updateToken(actionData.token);
		navigate(`/auth`, { replace: true });
	}

	return (
		<Layout centerContent>
			<Button as={Link} to='/auth' bg={'green.400'} mb={10}>
				Auth ModeDev
			</Button>
			<Form method='POST'>
				<FormControl isRequired isInvalid={!!actionData?.email}>
					<FormLabel>Email</FormLabel>
					<Input placeholder='Put your email here...' defaultValue='test@test.com' required type='email' name='email' />
					{!!actionData?.email && <FormErrorMessage>{actionData?.email}</FormErrorMessage>}
				</FormControl>
				<FormControl mt='3' isInvalid={!!actionData?.code}>
					<FormLabel>Code</FormLabel>
					<Input placeholder='Put the code we sent you here' name='code' />
					{!!actionData?.code && <FormErrorMessage>{actionData?.code}</FormErrorMessage>}
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
