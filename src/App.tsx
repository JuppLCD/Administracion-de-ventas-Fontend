import { ChakraProvider } from '@chakra-ui/react';

import Layout from './layout';

function App() {
	return (
		<>
			<ChakraProvider>
				<Layout />
			</ChakraProvider>
		</>
	);
}

export default App;
